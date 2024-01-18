export const getTime = (timezone) => {
  const localTime = new Date().getTime();
  const localOffset = new Date().getTimezoneOffset() * 60000;
  const currentUtcTime = localOffset + localTime;
  const cityOffset = currentUtcTime + 1000 * timezone;
  const cityTime = new Date(cityOffset).toUTCString();
  return cityTime;
};
