import { useState } from "react";
import "./App.css";

const SubjectComponent = (props: { subject: string; subjectInput: string }) => {
  return (
    <div>
      <p>
        {props.subject}: {props.subjectInput}
      </p>
    </div>
  );
};
const NoticeComponent = (props: { emoji: string; emojiInput: string }) => {
  return (
    <div>
      <p>
        {props.emoji}: {props.emojiInput}
      </p>
    </div>
  );
};

function App() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [subjectInput, setSubjectInput] = useState<string>("");
  const [subjectComponents, setSubjectComponents] = useState<
    | {
        subject: string;
        subjectInput: string;
      }[]
    | null
  >([]);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [emojiInput, setEmojiInput] = useState<string>("");
  const [emojiComponents, setEmojiComponents] = useState<
    { emoji: string; emojiInput: string }[] | null
  >([]);
  const subjects = [
    { id: "math", name: "수학" },
    { id: "science", name: "과학" },
    { id: "korean", name: "국어" },
  ];
  const emojis = [
    { id: "smile", emoji: "😀" },
    { id: "sad", emoji: "😢" },
    { id: "angry", emoji: "😡" },
  ];

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
  };

  const handleEmojiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmoji(e.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // 엔터 키를 눌렀을 때 실행할 함수를 호출합니다.
      handleEnter();
    }
  };

  const handleEnter = () => {
    if (selectedSubject && subjectInput) {
      const newComponents = {
        subject: selectedSubject || "",
        subjectInput: subjectInput,
      };
      setSubjectComponents([...subjectComponents!, newComponents]);
      setSubjectInput("");
    }
  };

  const onSubmit = () => {
    if (selectedEmoji && emojiInput) {
      const newEmojiComponents = {
        emoji: selectedEmoji || "",
        emojiInput: emojiInput,
      };
      setEmojiComponents([...emojiComponents!, newEmojiComponents]);
      setSelectedEmoji(null);
      setEmojiInput("");
    }
  };

  return (
    <>
      <div>
        <label htmlFor="subject">과목 선택:</label>
        <select
          id="subject"
          value={selectedSubject || ""}
          onChange={handleSubjectChange}
        >
          <option value="">과목을 선택하세요</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </select>
        <div>
          <label htmlFor="subjectInput">할일 입력:</label>
          <input
            id="subjectInput"
            type="text"
            value={subjectInput}
            onChange={(e) => setSubjectInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        {subjectComponents?.map((component) => (
          <SubjectComponent
            subject={component.subject}
            subjectInput={component.subjectInput}
          />
        ))}
      </div>
      <div>
        <label htmlFor="emoji">이모지 선택:</label>
        <select
          id="emoji"
          value={selectedEmoji || ""}
          onChange={handleEmojiChange}
        >
          <option value="">이모지를 선택하세요</option>
          {emojis.map((emoji) => (
            <option key={emoji.id} value={emoji.emoji}>
              {emoji.emoji}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="emojiInput">이모지 입력:</label>
        <input
          id="emojiInput"
          type="text"
          value={emojiInput}
          onChange={(e) => setEmojiInput(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => onSubmit()}>알림장 작성 완료!</button>
      </div>
      <div>
        {emojiComponents?.map((component, index) => (
          <NoticeComponent
            emoji={component.emoji}
            emojiInput={component.emojiInput}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
