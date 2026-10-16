import { memo } from "react";
import { getLogo } from "../lib/image";
import { alpha, mix, readable } from "../lib/color";
import { lastName } from "../lib/drivers";

/** Back of the card in the team's livery: a sash in the accent color and the team badge. */
const DriverBack = ({ driver, team }) => {
  const ink = readable(team.color2, team.color1, 4.5);

  return (
    <div
      className="relative flex size-full flex-col items-center justify-center gap-3 select-none"
      style={{
        backgroundColor: team.color1,
        backgroundImage: `linear-gradient(115deg, transparent 52%, ${team.color2} 52% 64%, transparent 64%), linear-gradient(180deg, rgb(255 255 255 / 0.12), transparent 35%, ${alpha(mix(team.color1, "#000000", 0.5), 0.35)})`,
      }}
    >
      <img
        src={getLogo(team.id)}
        alt={team.title}
        loading="lazy"
        className="logo-halo relative h-24 w-32 object-contain"
      />
      <p
        className="relative max-w-[85%] rounded-md px-2 py-0.5 text-center shadow-sm font-display text-xs leading-tight uppercase"
        style={{ color: ink, backgroundColor: team.color1 }}
      >
        {team.title}
      </p>

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-black/60 py-1.5 pr-3 backdrop-blur-sm">
        <div aria-hidden="true" className="checkered h-4 w-8 shrink-0" />
        <p className="truncate font-display text-xs tracking-[0.2em] text-white uppercase">
          {lastName(driver.name)}
        </p>
      </div>
    </div>
  );
};

export default memo(DriverBack);
