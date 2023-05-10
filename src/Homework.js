import styled from 'styled-components';
import SelectFeeling from './FeelingDropdown';
import WritingHomework from './WritingHomework';
import React, { useState } from 'react';

function Homework() {
  const todayDate = new Date();
  const formalDate =
    todayDate.getFullYear() +
    '년 ' +
    (todayDate.getMonth() + 1) +
    '월 ' +
    todayDate.getDate() +
    '일';
  const [dateList, setDateList] = useState([]);
  const handleSubmit = () => {
    setDateList((currentArray) => [formalDate, ...currentArray]);
  };

  return (
    <>
      <TotalBox>
        <Left>
          <ReminderDiv>알림장😝</ReminderDiv>
          <HwTodayDiv>숙제💻</HwTodayDiv>
          <WritingHomework />
          <HwTodayDiv>오늘의 나는?</HwTodayDiv>
          <SelectFeeling />
          <DiaryButton onClick={handleSubmit}>알림장 작성 완료!</DiaryButton>
        </Left>

        <Right>
          <DateInput>
            {dateList.map((item, index) => (
              <List key={index}>{item}</List>
            ))}
          </DateInput>
        </Right>
      </TotalBox>
    </>
  );
}

const ReminderDiv = styled.div`
  font-family: 'Hi Melody', cursive;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

const HwTodayDiv = styled.div`
  font-family: 'Hi Melody', cursive;
  margin-top: 20px;
  color: black;
  font-weight: bold;
  font-size: 15px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalBox = styled.div`
  padding: 20px;
  background-color: skyblue;
  display: flex;
`;

const DiaryButton = styled.button`
  margin: 20px;
  font-family: 'Hi Melody', cursive;
`;

const DateInput = styled.div`
  font-family: 'Hi Melody', cursive;
  color: black;
`;
const List = styled.div`
  font-family: 'Hi Melody', cursive;
  color: black;
  margin: 10px;
`;
export default Homework;
