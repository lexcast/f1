const getLogo = (teamId) =>
  `${process.env.PUBLIC_URL}/images/logos/${teamId}.png`;

const getDriver = (driverId, itemKey) =>
  `${process.env.PUBLIC_URL}/images/drivers/${driverId}/${itemKey}.png`;

export { getLogo, getDriver };
