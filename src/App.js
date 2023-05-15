import React,{ useState } from 'react';
import styled from 'styled-components';

import './App.css';

export default function App() {
    return (
        <ParentDivCom />
    );
}



function ParentDivCom() {
    const [homeworks, setHomeworks] = useState([]);
    const [noticeMemos,setNoticeMemos] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);

    const handleNoticeItemButtonClick= (event) => {
        setModalOpen(true);
    }

    let now = new Date();
    let date = `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`


    return(
        <>
        <ParentDiv>
            <LeftDivCom homeworks={homeworks} setHomeworks={setHomeworks} noticeMemos={noticeMemos} setNoticeMemos={setNoticeMemos}/>
            <RightDiv>
                <NoticeItemButton onClick={handleNoticeItemButtonClick}>
                    <NoticeItemButton_Date>{date}</NoticeItemButton_Date>
                    <NoticeItemButton_Emotion>noticeMemos[0][1]</NoticeItemButton_Emotion>
                    <NoticeItemButton_TeacherCheck>선생님 확인: ❤️</NoticeItemButton_TeacherCheck>
                </NoticeItemButton>
            </RightDiv>
        </ParentDiv>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        </>
    )
}

function Modal({modalOpen,setModalOpen}) {
    const handleModalCloseButton = () => {
        setModalOpen(false);
    }

    if (!modalOpen) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>안녕하세요</ModalHeader>
                <ModalContent>모달 컨텐츠</ModalContent>
                <ModalCloseButton onClick={handleModalCloseButton}>끄기</ModalCloseButton>
            </ModalContainer>
        </ModalOverlay>
    )

}

function LeftDivCom({homeworks,setHomeworks,noticeMemos,setNoticeMemos}) {
    return (
        <LeftDiv>
            <HomeworkDiv >
                <h1>알림장</h1>
                <h3>숙제</h3>
                <Subject homeworks={homeworks} setHomeworks={setHomeworks}/>
            </HomeworkDiv>
            <TodayMeDiv>
                <h3>오늘의 나는?</h3>
                <TodayMe homeworks={homeworks} noticeMemos={noticeMemos} setNoticeMemos={setNoticeMemos}/>
            </TodayMeDiv>
        </LeftDiv>
    );
}

/** Homework Div */
function Subject({ homeworks, setHomeworks }) {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [writtenSubjectMemo, setWrittenSubjectMemo] = useState("");

  const handleSelectedSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleWrittenSubjectMemoChange = (event) => {
    setWrittenSubjectMemo(event.target.value);
  };

  function handleKeyPress(event) {
    if (event.key === "Enter") { // 눌린 키가 Enter인지 확인
        event.preventDefault(); //자동으로 줄바꿈 되는 것 방지
        if (homeworks.length===5) {
            alert("최대 5개까지만 입력할 수 있습니다.");
            setSelectedSubject('');
            setWrittenSubjectMemo('최대 5개까지만 입력할 수 있습니다.');
        } else {
            if (selectedSubject!=="" && writtenSubjectMemo!==""){
                setHomeworks( (prevHomeworks) => [
                    ...prevHomeworks,
                    `${selectedSubject}: ${writtenSubjectMemo}`
                    ]); 
                setSelectedSubject('');
                setWrittenSubjectMemo('');
                if (homeworks.length===4) { //QQQ.질문해야함. 왜 하나씩 밀리는지
                    setSelectedSubject('');
                    setWrittenSubjectMemo('최대 5개까지만 입력할 수 있습니다.');
                    handleKeyDown();
            }}
        }
    }
  }
  
  function handleKeyDown(event) { //5개의 숙제를 입력하면 더이상 입력하지 못하게 하는 역할
    if (homeworks.length===5) {
        event.preventDefault();
    }
  }

  return (
    <>
      <DropdownSelect 
        value={selectedSubject} 
        onChange={handleSelectedSubjectChange}>
        <option value="" disabled>과목을 선택하세요</option>
        <option value="국어">국어</option>
        <option value="수학">수학</option>
        <option value="영어">영어</option>
        <option value="과학">과학</option>
      </DropdownSelect>
      <TextboxTextarea
        onKeyPress={handleKeyPress}
        onKeyDown= {handleKeyDown}
        rows="1"
        cols="20"
        value={writtenSubjectMemo}
        onChange={handleWrittenSubjectMemoChange}
        placeholder="기억할 내용을 작성해주세요."
      ></TextboxTextarea>
      {homeworks.map((homework,index) => (
        <Homeworks key={index}>{homework}</Homeworks>
        ))
      }
    </>
  );
}


/** TodayMe Div */
function TodayMe({homeworks,noticeMemos,setNoticeMemos}) {
    const [selectedEmotion, setSelectedEmotion] = useState("");
    const [writtenEmotionMemo, setWrittenEmotionMemo] = useState("");

    const handleSelectedEmotionChange = (event) => {
        setSelectedEmotion(event.target.value);
    }

    const handleWrittenEmotionMemoChange =(event) => {
        setWrittenEmotionMemo(event.target.value);
    }

    const handleButtonClick = (event) => {
        setNoticeMemos( (prevNoticeMemos) => {

            return [
                ...prevNoticeMemos,
                [homeworks,`${selectedEmotion} ${writtenEmotionMemo}`]
            ];
        }); 
    }

    // console.log(noticeMemos[0][1]);

    return(
        <>
        <DropdownSelect
            value={selectedEmotion}
            onChange={handleSelectedEmotionChange}>
            <option value="" disabled>오늘의 기분은 어땠나요?</option>
            <option value="😌">😌</option>
            <option value="😆">😆</option>
            <option value="🥹">🥹</option>
            <option value="😍">😍</option>
        </DropdownSelect>
        <TextboxTextarea
            rows="1"
            cols="20"
            maxLength ="5"
            value={writtenEmotionMemo}
            onChange={handleWrittenEmotionMemoChange}
            placeholder="오늘을 다섯글자로 표현해주세요!"
        ></TextboxTextarea>
        <CompleteButton onClick={handleButtonClick}>알림장 작성 완료!</CompleteButton>
        </>
    );
}

const ParentDiv = styled.div`
    display: flex;
    flex-direction : row;
    width: 100vw;
    height: 50vw;
`

const LeftDiv = styled.div`
    display: flex;
    flex-direction: column; //자식 div들을 세로로 층층이 배치시켜줌
    align-items: center; //자식 div들을 가로 중앙에 배치
    border-right: 2px solid;
    color: white;
    width: 40vw;
    height: 50vw;

`
const HomeworkDiv = styled.div`
    // border: 1px solid white;
    width: 80%;
`

const TodayMeDiv = styled.div`
    // border: 1px solid white;
    width:80%;
    margin-top: 3vw;
`

const DropdownSelect = styled.select`
    width: 100%;
    height: 4vw;
    font-size: 1rem;
    text-align: center;
    color: gray;
    border-radius: 8px;
    border: 0px;
`

const TextboxTextarea = styled.textarea`
    width: 100%;
    height:6vw;
    font-size: 1rem;
    color: gray;
    border-radius: 8px;
    border: 0px;
    margin-top: 2vw;
    padding: 15px;
    box-sizing: border-box;
`
const Homeworks = styled.div`
    background-color: white;
    color: black;
    width: 100%;
    height:3vw;
    font-size: 1.2rem;
    border-radius: 8px;
    border: 0px;
    margin-top: 1vw;
    padding: 12px;
    box-sizing: border-box;
    text-align: center;
`
const CompleteButton = styled.button`
    width:100%;
    height: 4vw;
    margin-top: 3vw;
    background-color: black;
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 0px;
`

const RightDiv = styled.div`
    display: flex;
    flex-direction: column; //자식 div들을 세로로 층층이 배치시켜줌
    align-items: center; //자식 div들을 가로 중앙에 배치
    color: white;
    height: 50vw;
    width: 60vw;
`

const NoticeItemButton = styled.button`
    width:80%;
    height: 6vh;
    margin-top: 3vw;
    background-color: white;
    color: black;
    text-align: center;
    font-size: 1.2rem;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 0px;
    display: flex;
`

const NoticeItemButton_Date = styled.div`
    width: 30%;
`
const NoticeItemButton_Emotion = styled.div`
    width: 50%;
    margin-left: 2%;
`

const NoticeItemButton_TeacherCheck = styled.div`
    width: 30%;
    margin-left: 5%;
`

const ModalOverlay = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); //뒤에 배경 불투명하게 만들어줌
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.div` //모달창
    width: 30%;
    height: 50%;
    background-color: white;
    border-radius: 16px;
    color: black;
    text-align: center;
    
`

const ModalHeader =styled.div`
    margin-top: 3vh;
    font-size: 1.5rem;
    
`

const ModalContent = styled.div`
    margin-top: 3vh;
    font-size: 1rem;
    height: 30vh;
    border: 1px solid;

`

const ModalCloseButton = styled.button`
    margin-top: 2vh;
    font-size: 1.5rem;
    background-color: black;
    color: white;
    border-radius: 16px;
    text-align: center;
    width: 10vw;
`