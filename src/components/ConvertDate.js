export default function ConvertDate(valueDate) {
  function addNullToDate(value) {
    const newValue = value < 10 ? `0${value}` : value;
    return newValue;
  }
  const newDate = new Date(valueDate);
  const date = addNullToDate(newDate.getDate());
  const month = addNullToDate(newDate.getMonth() + 1);
  const year = addNullToDate(newDate.getFullYear());
  const shownDate = `${date}.${month}.${year}`;
  return shownDate;
}