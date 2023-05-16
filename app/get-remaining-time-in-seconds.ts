const TRIP_DATE = new Date("2023-08-11T12:59:00.000Z");

function getDiffInSeconds(dateLeft: Date, dateRight: Date) {
  const diff = Math.abs(dateLeft.getTime() - dateRight.getTime());
  return diff / 1000;
}

export function getRemainingTimeInSeconds() {
  return getDiffInSeconds(new Date(), TRIP_DATE);
}
