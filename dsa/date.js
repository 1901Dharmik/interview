// Q1. Get current date and time
function getCurrentDateTime() {
  const now = new Date();
  console.log(now.toString());
  console.log(now.toLocaleString());
  return now;
}

// Q2. Get specific parts of date
function getDateParts(date = new Date()) {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  };
}

// Q3. Format date as DD/MM/YYYY
function formatDate(date = new Date()) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Q4. Calculate age from birthdate
function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// Q5. Add days to date
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Q6. Get difference between two dates in days
function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}

// Q7. Check if date is weekend
function isWeekend(date = new Date()) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

// Q8. Get first day of month
function getFirstDayOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

// Q9. Get last day of month
function getLastDayOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

// Q10. Compare two dates
function compareDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  if (d1 < d2) return -1;
  if (d1 > d2) return 1;
  return 0;
}
