import styled from 'styled-components';
import React, { useState } from 'react';

function WritingHomework() {
  const Subject = [
    { id: null, value: '과목 선택하기' },
    { id: 1, value: '국어' },
    { id: 2, value: '수학' },
    { id: 3, value: '사회' },
    { id: 4, value: '과학' },
    { id: 5, value: '영어' },
  ];

  const [selectedDropdownValue, setSelectedDropdownValue] = useState('');
  const [dropdownValueList, setDropdownValueList] = useState([]);
  const handleDropdown = (e) => {
    setSelectedDropdownValue(e.target.value);
  };

  const [homeworkInput, setHomeworkInput] = useState('');
  const [homeworkList, setHomeworkList] = useState([]);
  const handleChange = ({ target: { value } }) => setHomeworkInput(value);
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setHomeworkList((currentArray) => [homeworkInput, ...currentArray]);
      setDropdownValueList((current) => [selectedDropdownValue, ...current]);

      //... 이게 뭐길래?
      setHomeworkInput('');
      setSelectedDropdownValue('');
    }
  };

  return (
    <>
      <Selector
        onChange={handleDropdown}
        options={Subject}
        placeholder="과목 선택하기"
        value={selectedDropdownValue}
      >
        {Subject.map((item) => {
          return <option key={item.id}>{item.value}</option>;
        })}
      </Selector>

      <form>
        <HomeworkInput
          type="text"
          name="homeworkInput"
          value={homeworkInput}
          onChange={handleChange}
          onKeyPress={handleOnKeyPress}
          required
          placeholder="해야하는 숙제를 입력하세요!"
        />
      </form>
      <HomeworkList>
        <HomeworkItem>
          {dropdownValueList.map((item, index) => (
            <List key={index}>{item}</List>
          ))}
        </HomeworkItem>
        <HomeworkItem>
          {homeworkList.map((item, index) => (
            <List key={index}>{item}</List>
          ))}
        </HomeworkItem>
      </HomeworkList>
    </>
  );
}
const HomeworkInput = styled.input`
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
const HomeworkList = styled.div`
  display: flex;
`;
const HomeworkItem = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  color: black;
  margin: 10px;
  font-family: 'Hi Melody', cursive;
`;

export default WritingHomework;
