const base = import.meta.env.BASE_URL;

export const getLogo = (teamId) => `${base}images/logos/${teamId}.png`;

export const getDriver = (driverId, teamId) =>
  `${base}images/drivers/${driverId}/${teamId}.png`;

export const getSignature = (driverId) =>
  `${base}images/drivers/${driverId}/signature.png`;
