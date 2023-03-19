import React from 'react';
import dayjs from 'dayjs';
import {
  BsChevronLeft as LeftArrow,
  BsChevronRight as RightArrow,
} from 'react-icons/bs';
import { WEEKDAYS } from './constants';
import { getCalendar } from './utils';
import {
  Container,
  Wrapper,
  ControlBlock,
  CurrentTime,
  CalendarBlock,
  WeekdayRow,
  WeekdayColumn,
  DateRow,
  DateColumn,
  ColumnText,
} from './styled';

const DatePicker = () => {
  const [current, setCurrent] = React.useState(dayjs().format('YYYY-MM-DD'));
  const calendar = getCalendar(current);

  const goPrevMonth = () => {
    setCurrent(dayjs(current).add(-1, 'month'));
  };

  const goNextMonth = () => {
    setCurrent(dayjs(current).add(1, 'month'));
  };

  return (
    <Container>
      <Wrapper>
        <ControlBlock>
          <LeftArrow onClick={goPrevMonth} />

          <CurrentTime>{dayjs(current).format('YYYY/MM')}</CurrentTime>

          <RightArrow onClick={goNextMonth} />
        </ControlBlock>

        <CalendarBlock>
          <WeekdayRow>
            {WEEKDAYS.map(weekday => (
              <WeekdayColumn key={weekday}>{weekday}</WeekdayColumn>
            ))}
          </WeekdayRow>

          {calendar.map(week => (
            <DateRow key={String(week)}>
              {week.map(day => (
                <DateColumn>
                  <ColumnText>{dayjs(day).format('D')}</ColumnText>
                </DateColumn>
              ))}
            </DateRow>
          ))}
        </CalendarBlock>
      </Wrapper>
    </Container>
  );
};

export default DatePicker;
