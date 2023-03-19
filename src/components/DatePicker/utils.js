import dayjs from 'dayjs';
import splitEvery from 'ramda/es/splitEvery';

const DAYS_OF_WEEK = 7;
const ROWS_OF_CALENDAR = 6;

const splitEveryDaysOfWeek = splitEvery(DAYS_OF_WEEK);

export const getCalendar = (date = dayjs().format('YYYY-MM-DD')) => {
  const current = dayjs(date).set('date', 1);

  const daysInMonth = current.daysInMonth();
  const firstDateDay = current.get('day');

  const allCalendarDates = Array(daysInMonth)
    .fill(null)
    .map((_, index) =>
      dayjs(date)
        .set('date', index + 1)
        .format('YYYY-MM-DD'),
    );

  Array(firstDateDay)
    .fill(null)
    .forEach((_, index) => {
      allCalendarDates.unshift(
        dayjs(allCalendarDates[0])
          .add(-(index + 1))
          .format('YYYY-MM-DD'),
      );
    });

  Array(ROWS_OF_CALENDAR * DAYS_OF_WEEK - allCalendarDates.length)
    .fill(null)
    .forEach((_, index) =>
      allCalendarDates.push(
        dayjs(allCalendarDates[allCalendarDates.length - 1])
          .add(index + 1, 'day')
          .format('YYYY-MM-DD'),
      ),
    );

  return splitEveryDaysOfWeek(allCalendarDates);
};
