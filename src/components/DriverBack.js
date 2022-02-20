import React from "react";
import { getLogo } from "utils/image";

const DriverBack = ({ team }) => {
  return (
    <div
      className="relative w-full border-l-4 border-r-4 h-full inline-flex items-center select-none transition-all"
      style={{ backgroundColor: team.color1, borderColor: team.color2 }}
    >
      <div className="mx-auto h-10 w-24 flex items-center transition-all">
        <img
          src={getLogo(team.id)}
          alt={team.title}
          className="max-w-full max-h-full mx-auto transition-all"
        />
      </div>
    </div>
  );
};

export default React.memo(DriverBack);
