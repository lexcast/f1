import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { drivers } from "../data";

const total = Object.keys(drivers).length;
const cards = () => screen.queryAllByRole("article");
const cardNames = () => cards().map((card) => card.getAttribute("aria-label"));

const setup = () => {
  const user = userEvent.setup();
  render(<App />);
  return {
    user,
    search: screen.getByRole("searchbox", { name: "Search drivers" }),
    filters: screen.getByRole("navigation", { name: "Filters" }),
  };
};

describe("App", () => {
  it("renders every driver sorted by last name", () => {
    setup();

    expect(cards()).toHaveLength(total);
    expect(screen.getByText(`${total} drivers`)).toBeInTheDocument();
    expect(cardNames().slice(0, 3)).toEqual([
      "Jack Brabham",
      "Juan Manuel Fangio",
      "Lewis Hamilton",
    ]);
  });

  it("searches ignoring case and clears with Escape", async () => {
    const { user, search } = setup();

    await user.type(search, "SCHUMACHER");
    expect(cardNames()).toEqual(["Michael Schumacher"]);
    expect(screen.getByText(`1 of ${total}`)).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(cards()).toHaveLength(total);
  });

  it("focuses the search with /", async () => {
    const { user, search } = setup();

    await user.keyboard("/");
    expect(search).toHaveFocus();
  });

  it("shows an empty state that resets the filters", async () => {
    const { user, search } = setup();

    await user.type(search, "nobody at all");
    expect(cards()).toHaveLength(0);
    expect(screen.getByText("No drivers found")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(search).toHaveValue("");
    expect(cards()).toHaveLength(total);
  });

  it("filters by nationality and can remove the filter", async () => {
    const { user, filters } = setup();
    const nationality = within(filters).getByRole("region", {
      name: "Nationality",
    });

    await user.click(
      within(nationality).getByRole("button", { name: "Germany" }),
    );
    expect(cardNames()).toEqual(["Michael Schumacher", "Sebastian Vettel"]);

    await user.click(
      screen.getByRole("button", { name: "Remove Germany filter" }),
    );
    expect(cards()).toHaveLength(total);
  });

  it("filters by team, shows its car and can remove the filter", async () => {
    const { user, filters } = setup();

    await user.click(
      within(filters).getByRole("button", { name: "Scuderia Ferrari" }),
    );
    expect(cardNames()).not.toContain("Lewis Hamilton");
    const lauda = screen.getByRole("article", { name: "Niki Lauda" });
    expect(
      within(lauda).getByAltText("Niki Lauda (Scuderia Ferrari)"),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Remove Scuderia Ferrari filter" }),
    );
    expect(cards()).toHaveLength(total);
  });

  it("switches every card to its first or last team", async () => {
    const { user, search } = setup();
    await user.type(search, "fangio");
    const photo = (team) =>
      within(
        screen.getByRole("article", { name: "Juan Manuel Fangio" }),
      ).getByAltText(`Juan Manuel Fangio (${team})`);

    expect(photo("Alfa Romeo")).toBeInTheDocument();

    // Fangio's last season was with Maserati, not his final team in the list.
    await user.click(screen.getByRole("button", { name: "Last" }));
    expect(photo("Maserati")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Auto" }));
    expect(photo("Alfa Romeo")).toBeInTheDocument();
  });

  it("lets a single card browse its own teams", async () => {
    const { user, search } = setup();
    await user.type(search, "hamilton");
    const card = screen.getByRole("article", { name: "Lewis Hamilton" });

    await user.click(
      within(card).getByRole("button", { name: "Mercedes-Benz" }),
    );
    expect(
      within(card).getByAltText("Lewis Hamilton (Mercedes-Benz)"),
    ).toBeInTheDocument();
    expect(
      within(card).getByRole("button", { name: "Mercedes-Benz" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("sorts by championships and reverses the order", async () => {
    const { user } = setup();

    await user.click(screen.getByRole("button", { name: "CHAMPIONSHIPS" }));
    expect(cardNames().slice(0, 2)).toEqual([
      "Lewis Hamilton",
      "Michael Schumacher",
    ]);

    await user.click(screen.getByRole("button", { name: "Ascending" }));
    expect(cardNames().at(-1)).toBe("Lewis Hamilton");
  });

  it("sorts by country", async () => {
    const { user } = setup();

    await user.click(screen.getByRole("button", { name: "COUNTRY" }));
    expect(cardNames().slice(0, 2)).toEqual([
      "Juan Manuel Fangio",
      "Jack Brabham",
    ]);
  });

  it("flips cards one by one and all at once", async () => {
    const { user, search } = setup();
    await user.type(search, "prost");
    const flip = () =>
      screen.getByRole("button", { name: "Flip Alain Prost card" });

    await user.click(flip());
    expect(flip()).toHaveAttribute("aria-pressed", "true");

    await user.click(screen.getByRole("button", { name: "Flip all" }));
    expect(flip()).toHaveAttribute("aria-pressed", "true");
    await user.click(screen.getByRole("button", { name: "Flip all" }));
    expect(flip()).toHaveAttribute("aria-pressed", "false");

    flip().focus();
    await user.keyboard("{Enter}");
    expect(flip()).toHaveAttribute("aria-pressed", "true");
  });

  it("frames cards by titles and shows them", async () => {
    const { user, search } = setup();
    const flip = (name) =>
      screen.getByRole("button", { name: `Flip ${name} card` });

    await user.type(search, "schumacher");
    expect(flip("Michael Schumacher")).toHaveAttribute("data-rarity", "gold");
    expect(screen.getByLabelText("7 World Championships")).toBeInTheDocument();

    await user.clear(search);
    await user.type(search, "lauda");
    expect(flip("Niki Lauda")).toHaveAttribute("data-rarity", "silver");
  });
});
