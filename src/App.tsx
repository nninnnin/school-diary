import React, { useState } from "react";

function App() {
  const [inputValues, setInputValues] = useState({
    homeworkType: "",
    homeworkMemo: "",
    moodType: "",
    moodMemo: "",
  });

  return (
    <div className="bg-yellow-100 text-white flex w-full h-[100vh] p-5">
      <section className="w-[350px] bg-slate-400 p-5 flex flex-col">
        <header className="font-bold text-[28px] ">알림장</header>

        <div className="bg-violet-400 p-2 mt-4">
          <h3 className="ml-2 mb-2 font-bold">오늘의 숙제</h3>

          <select className="bg-slate-700 p-2 rounded-lg" name="" id="">
            <option value="" selected>
              과목을 선택해주세요
            </option>
            <option value="">국어</option>
            <option value="">수학</option>
            <option value="">영어</option>
            <option value="">과학</option>
          </select>

          <textarea
            className="w-full mt-2 rounded-md bg-slate-50 p-3 text-black"
            name=""
            id=""
            placeholder="기억할 내용을 작성해주세요.."
          ></textarea>
        </div>

        <div className="bg-violet-400 p-2 mt-5">
          <h3 className="ml-2 mb-2 font-bold">오늘 내 기분</h3>

          <div className="bg-slate-700 rounded-lg w-full relative after:content-['▼'] after:absolute after:z-10 after:right-[8px] after:top-[8px] h-10">
            <select
              className="bg-transparent p-2 w-full absolute"
              name=""
              id=""
            >
              <option value="" selected>
                오늘의 기분은?
              </option>
              <option value="">😄</option>
              <option value="">🥲</option>
              <option value="">🥹</option>
            </select>
          </div>

          <textarea
            className="w-full mt-2 rounded-md bg-slate-50 p-3 text-black"
            name=""
            id=""
            placeholder="기억할 내용을 작성해주세요.."
          ></textarea>
        </div>

        <button
          className="bg-black w-full p-3 rounded-2xl mt-auto"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          알림장 작성 완료!
        </button>
      </section>

      <section className="bg-pink-400 flex-1 p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus
        voluptates magnam ut delectus quae nesciunt ducimus sed provident
        debitis a perferendis aliquam fuga, praesentium ad harum, odit eum, cum
        animi nobis deleniti veniam ex? Assumenda nobis eaque vitae animi fugit,
        natus, laboriosam, aliquam porro beatae repudiandae explicabo
        distinctio? Soluta excepturi corrupti corporis? Ipsa dolores nesciunt
        mollitia dolorem consequatur, quidem explicabo tenetur, similique, quas
        est velit. Delectus obcaecati provident corporis fuga blanditiis quam,
        dolore libero natus dolorem voluptatum facere, tempora accusamus!
        Voluptate veritatis illum nihil perspiciatis veniam. Asperiores corrupti
        fuga natus minus impedit eligendi quisquam at porro, vero soluta minima.
      </section>
    </div>
  );
}

export default App;
