import styled from 'styled-components';
import React, { useState } from 'react';

function SelectFeeling() {
  const Feeling = [
    { id: null, value: '오늘의 기분은?' },
    { id: 1, value: '행복함😍' },
    { id: 2, value: '힘듦🥵' },
    { id: 3, value: '슬픔😭' },
    { id: 4, value: '화남😡' },
    { id: 5, value: '그저그럼🤨' },
  ];
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [feelingList, setFeelingList] = useState([]);
  const handleFeeling = (e) => {
    setSelectedFeeling(e.target.value);
  };

  const [feelingInput, setFeelingInput] = useState('');
  const [feelingInputList, setFeelingInputList] = useState([]);
  const inputChange = ({ target: { value } }) => setFeelingInput(value);
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setFeelingInputList((currentArray) => [feelingInput, ...currentArray]);
      setFeelingList((current) => [selectedFeeling, ...current]);
      // Array=[]
      //... 이게 뭐길래?
      setFeelingInput('');
      setSelectedFeeling('');
    }
  };
  return (
    <>
      <Selector
        onChange={handleFeeling}
        options={Feeling}
        placeholder=""
        value={selectedFeeling}
      >
        {Feeling.map((item) => {
          return <option key={item.id}>{item.value}</option>;
        })}
      </Selector>

      <form>
        <TodayFeelingInput
          type="text"
          name="feelingInput"
          value={feelingInput}
          onChange={inputChange}
          onKeyPress={handleOnKeyPress}
          required
          placeholder="오늘을 다섯 글자로 표현해보기!"
        />
      </form>
      <FeelingList>
        <FeelingItem>
          {feelingList.map((item, index) => (
            <List key={index}>{item}</List>
          ))}
        </FeelingItem>
        <FeelingItem>
          {feelingInputList.map((item, index) => (
            <List key={index}>{item}</List>
          ))}
        </FeelingItem>
      </FeelingList>
    </>
  );
}
const TodayFeelingInput = styled.input`
  width: 300px;
  height: 100px;
  margin-top: 20px;
  font-family: 'Hi Melody', cursive;
`;

const Selector = styled.select`
  color: black;
  width: 100px;
  margin-top: 20px;
  font-family: 'Hi Melody', cursive;
`;
const FeelingList = styled.div`
  display: flex;
`;
const FeelingItem = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  color: black;
  font-family: 'Hi Melody', cursive;
  margin: 10px;
`;
export default SelectFeeling;
