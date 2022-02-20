import { flags } from "data";
import React from "react";
import { getLogo, getDriver } from "utils/image";

const DriverFront = ({ id, driver, team }) => {
  return (
    <div
      className="w-full h-full bg-cover bg-no-repeat bg-center select-none transition-all"
      style={{
        backgroundColor: team.color1,
        backgroundImage: `url("${getDriver(id, team.id)}")`,
      }}
    >
      <div className="absolute top-0 left-0 h-10 w-20 m-2 opacity-50 flex items-center transition-all">
        <img
          src={getLogo(team.id)}
          alt={team.title}
          className="max-w-full max-h-full transition-all"
        />
      </div>
      <div className="absolute bottom-0 pb-3" style={{ color: team.color1 }}>
        <p
          className="font-bungee font-black tracking-tighter text-lg"
          style={{ backgroundColor: team.color2 }}
        >
          {driver.name.split(" ").map((txt, i, arr) => {
            if (arr.length !== i + 1) {
              return (
                <span className="text-xs" key={i}>
                  {txt}
                </span>
              );
            }
            return <span key={i}>{txt.replace(/\|/g, " ")}</span>;
          })}
        </p>
      </div>
      {false !== driver.signature && (
        <div className="w-12 h-12 flex items-center justify-center absolute right-0 bottom-0 mb-12 mr-5">
          <img
            src={getDriver(id, "signature")}
            alt={id}
            className="signature-filter max-w-full max-h-full"
          />
        </div>
      )}
      <div className="flex items-center justify-center absolute right-0 top-0 mr-2 text-2xs text-shadow">
        {flags[driver.country]}
      </div>
      <div className="flex flex-row-reverse items-center justify-center absolute right-0 bottom-0 mr-2 text-2xs text-shadow">
        {driver.championships > 0 && (
          <span className="text-yellow-400">
            {"★".repeat(driver.championships)}
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(DriverFront);
