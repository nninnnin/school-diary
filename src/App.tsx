import { useState } from "react";
import { InputValues, Note as NoteType } from "./models";
import Note from "./components/Note";
import { HomeworkTypes, MoodTypes } from "./constants";

function App() {
  const [inputValues, setInputValues] = useState<InputValues>({
    homeworkType: "",
    homeworkMemo: "",
    moodType: "",
    moodMemo: "",
  });

  const [notes, setNotes] = useState<Array<NoteType>>([]);

  const handleChangeInputValues =
    (inputName: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setInputValues((prev) => ({
        ...prev,
        [inputName]: e.target.value,
      }));
    };

  const handleSubmitButtonClick = () => {
    const hasAllInputValueFulfilled = Object.values(inputValues).reduce(
      (isFulfilled, inputValue) => {
        return Boolean(inputValue?.length) && isFulfilled;
      },
      true
    );

    if (!hasAllInputValueFulfilled) {
      alert("모든 값을 채워주세요!");

      return;
    }

    const newNote = {
      ...(inputValues as NoteType),
      createdAt: new Date(),
    };

    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <div className="bg-yellow-100 text-white flex w-full h-[100vh] p-5">
      <section className="w-[350px] bg-slate-400 p-5 flex flex-col">
        <header className="font-bold text-[28px] ">알림장</header>

        <div className="bg-violet-400 p-2 mt-4">
          <h3 className="ml-2 mb-2 font-bold">오늘의 숙제</h3>

          <select
            className="bg-slate-700 p-2 rounded-lg"
            name=""
            id=""
            onChange={handleChangeInputValues("homeworkType")}
          >
            <option value="">과목을 선택해주세요</option>
            <option value={HomeworkTypes.Korean}>국어</option>
            <option value={HomeworkTypes.Mathmatics}>수학</option>
            <option value={HomeworkTypes.English}>영어</option>
            <option value={HomeworkTypes.Science}>과학</option>
          </select>

          <textarea
            className="w-full mt-2 rounded-md bg-slate-50 p-3 text-black"
            name=""
            id=""
            placeholder="숙제와 관련된 내용을 써주세요!"
            onChange={handleChangeInputValues("homeworkMemo")}
            value={inputValues.homeworkMemo}
          ></textarea>
        </div>

        <div className="bg-violet-400 p-2 mt-5">
          <h3 className="ml-2 mb-2 font-bold">오늘 내 기분</h3>

          <div className="bg-slate-700 rounded-lg w-full relative after:content-['▼'] after:absolute after:z-10 after:right-[8px] after:top-[8px] h-10">
            <select
              className="bg-transparent p-2 w-full absolute"
              name=""
              id=""
              onChange={handleChangeInputValues("moodType")}
              value={inputValues.moodType ?? ""}
            >
              <option value="">오늘의 기분은?</option>
              <option value={MoodTypes.Happy}>😄</option>
              <option value={MoodTypes.Lovely}>😍</option>
              <option value={MoodTypes.Sad}>🥲</option>
              <option value={MoodTypes.Touched}>🥹</option>
            </select>
          </div>

          <textarea
            className="w-full mt-2 rounded-md bg-slate-50 p-3 text-black"
            name=""
            id=""
            placeholder="오늘 기분이 어때요?"
            onChange={handleChangeInputValues("moodMemo")}
            value={inputValues.moodMemo}
          ></textarea>
        </div>

        <button
          className="bg-black w-full p-3 rounded-2xl mt-auto"
          onClick={handleSubmitButtonClick}
        >
          알림장 작성 완료!
        </button>
      </section>

      <section className="bg-pink-400 flex-1 p-5">
        {notes.map((note) => {
          return <Note note={note} />;
        })}
      </section>
    </div>
  );
}

export default App;
