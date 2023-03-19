import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  color: #606060;

  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  padding: 12px;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  background: #ffffff;
`;

export const ControlBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 20px;

  & > svg {
    font-size: 24px;
  }
`;

export const CurrentTime = styled.div`
  flex: 1;
  text-align: center;
`;

export const CalendarBlock = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const WeekdayRow = styled(Row)``;

export const DateRow = styled(Row)``;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  user-select: none;
`;

export const WeekdayColumn = styled(Column)``;

export const ColumnText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const DateColumn = styled(Column)`
  cursor: pointer;

  &:hover {
    ${ColumnText} {
      color: #ffffff;
      background: #97deff;
    }
  }

  ${({ isSelect }) =>
    isSelect &&
    css`
      ${ColumnText} {
        color: #ffffff;
        background: #62cdff;
      }
    `}
`;
