import { useState, useEffect } from "react";
import styled from "styled-components";
import Homework from "./Homework";

const StyledText = styled.textarea`
border-radius: 10px;
border: white;
width: 250px;
margin-bottom: 40px;
margin-top: 10px;
resize: none;
padding: 10px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledOuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border-right: 3px dotted white;
    align-items: center;
`;

const StyledSelect = styled.select`
    width: 270px;
    border: white;
    padding: 5px 0px;
    border-radius: 5px;
`;

const StyledButton = styled.button`
    cursor: pointer;
    width: 235px;
    margin: 10px 18px;
    margin-bottom: 30px;
    padding: 1rem;
    font-size: 15px;
    background-color: black;
    color: white;
    border-radius: 1rem;
    transition: 0.5s;
    border: black;
    &:hover {
      background: #555555;
      transition: 0.5s;
      border: #555555;
    }
`;

const StyledOption = styled.option`
    text-align: center;
`;

const StyledH3 = styled.h3`
    color: white;
    margin: 20px 2px;
    margin-top: 60px;
    padding-top: 10px;
    border-top: 2px dashed white;
`;

const StyledH2 = styled.h2`
    color: white;
    padding: 0px 10px 0px 20px;
    font-size: 2em;
`;


function HomeworkAdd({addRecord}){
    const [hwSubject, setHwSubject] = useState("국어");
    const [hw, setHw] = useState("");
    const [hws, setHws] = useState([]);
    const [emoType, setEmoType] = useState("기쁨");
    const [emo, setEmo] = useState("");
    const [key, setKey] = useState(0);
    console.log("rendered");

    const onSubmit = (event) => {
        event.preventDefault();
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const dateString = `${year}년 ${month}월 ${day}일`;
        addRecord(emo, emoType, dateString, hws);
        setHw("");
        setEmo("");
        setHws([]);
    };

    const onHwSubChange = (event) => {
        const value = event.target.value;
        setHwSubject(value);
    }

    const onHwChange = (event) => {
        const {target:{value}} = event;
        setHw(value);
    }

    const onEmoTypeChange = (event) => {
        const {target:{value}} = event;
        setEmoType(value);
    }

    const onEmoChange = (event) => {
        const {target:{value}} = event;
        if(value.length <= 5)
        {
            setEmo(value);
        }
    };

    const onEnter = (event) => {
        if (event.keyCode === 13) {
          //event.target.value를 화면에 표시
          const value = event.target.value.trim();
          if(value && hws.length < 5)
          {
            setHws([...hws, [event.target.value, hwSubject, key]]);
            setKey(key + 1);
            setHw("");
          }
          else if(hws.length >= 5)
          {
            alert("숙제의 개수가 너무 많습니다.");
          }
        }
    };


    return (
        <StyledOuterDiv>
        <StyledH2>알림장</StyledH2>
        <form onSubmit={onSubmit}>
            <StyledDiv>
            <StyledH3>숙제</StyledH3>
            <StyledSelect onChange={onHwSubChange} name="homework" id="homework_select">
                <StyledOption value="국어">국어</StyledOption>
                <StyledOption value="수학">수학</StyledOption>
                <StyledOption value="영어">영어</StyledOption>
                <StyledOption value="과학">과학</StyledOption>
            </StyledSelect>
            <StyledText onKeyDown={onEnter} onChange={onHwChange} name="write_homework" id="write_homework" cols="30" rows="10" value={hw} placeholder="기억할 내용을 작성해 주세요"></StyledText>
            <div>
                {hws.map(homework => (
                    <Homework key={homework[2]} homework={homework}/>
                ))}
            </div>
            
            <StyledH3>오늘의 나는?</StyledH3>
            <StyledSelect onChange={onEmoTypeChange} name="emotion" id="emotion_select">
                <StyledOption value="&#128512;">&#128512;</StyledOption>
                <StyledOption value="&#128517;">&#128517;</StyledOption>
                <StyledOption value="&#128514;">&#128514;</StyledOption>
                <StyledOption value="&#128533;">&#128533;</StyledOption>
            </StyledSelect>
            <StyledText onChange={onEmoChange} name="write_emotion" id="write_emotion" cols="30" rows="10" value={emo} placeholder="오늘을 다섯글자로 표현해주세요!"></StyledText>
            <StyledButton>알림장 작성 완료!</StyledButton>
            </StyledDiv>
        </form>
        </StyledOuterDiv>
    );

}

export default HomeworkAdd;