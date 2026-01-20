export function generateMonth(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);

  const days = [];
  const weekdayOffset = (first.getDay() + 6) % 7;

  for (let i = 0; i < weekdayOffset; i++) {
    days.push(null);
  }

  for (let d = 1; d <= last.getDate(); d++) {
    days.push(new Date(year, month, d));
  }

  return { year, month, days };
}
