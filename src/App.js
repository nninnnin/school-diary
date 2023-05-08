import React,{ useState } from 'react';
import './App.css';
import styled from 'styled-components'


// const Button = styled.button`
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;`

const LeftDiv = styled.div`
    border-right: 2px solid;
    color: white;
    width: 40vw;
    height: 50vw;
    display: flex;
    justify-content: center;
`
const HomeworkDiv = styled.div`
    // border: 1px solid white;
    width:80%;
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

/** Subject Div */

function Subject() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [writtenSubjectMemo, setWrittenSubjectMemo] = useState("");
  const [homeworks, setHomeworks] = useState([]);

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
        }
        else {
            if (selectedSubject!="" && writtenSubjectMemo!=""){
                setHomeworks( (prevHomeworks) => [
                    ...prevHomeworks,
                    `${selectedSubject}: ${writtenSubjectMemo}`
                    ]);
                setSelectedSubject('');
                setWrittenSubjectMemo('');
                console.log(homeworks);
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




export default function App() {
    return (
        <LeftDiv>
            <HomeworkDiv>
                <h1>알림장</h1>
                <h3>숙제</h3>
                <Subject />
            </HomeworkDiv>
        </LeftDiv>
    );
}











// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// const [selectedSubject, setSelectedSubject] = useState('');
// const [writtenSubjectMemo, setWrittenSubjectMemo] = useState('');
// function SubjectDropdown() {
//     const handleChange = (event) => {
//         setSelectedSubject(event.target.value);
//     }
//     return (
//         <DropdownSelect value={selectedSubject} onChange={handleChange} >
//             <option value="" disabled>과목을 선택하시오.</option>
//             <option value="국어">국어</option>
//             <option value="수학">수학</option>
//             <option value="영어">영어</option>
//             <option value="과학">과학</option>
//         </DropdownSelect>
//     )
// }

// function SubjectMemoTextbox() {
   
//     const handleChange = (event) => {
//         setWrittenSubjectMemo(event.target.value);
//     }

//     function handleKeyPress(event) {
//         //눌린 키가 Enter인지 확인
//         if (event.key === 'Enter') {
//             console.log('good');
//         }
//     }

//     return (
//         <TextboxTextarea onKeyPress={handleKeyPress} rows="10" cols="50" value ={writtenSubjectMemo} onChange={handleChange} placeholder="기억할 내용을 작성해주세요." >
//         </TextboxTextarea>
//     )
// }