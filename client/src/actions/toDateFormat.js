import { toMonthWords } from "./toMonthWords";

export function toDateFormat(date) {
  let curDate = new Date();
  if (
    curDate.getDate() == date.getDate() &&
    curDate.getMonth() == date.getMonth() &&
    curDate.getFullYear() == date.getFullYear()
  ) {
    return "Today";
  }
  if (
    curDate.getDate()-1 == date.getDate() &&
    curDate.getMonth() == date.getMonth() &&
    curDate.getFullYear() == date.getFullYear()
  ) {
    return "Yesterday";
  }
  return date.getDate() + " - " + toMonthWords(date.getMonth()) + " - " + date.getFullYear();
}
