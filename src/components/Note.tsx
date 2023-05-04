import { format } from "date-fns";
import { Note as NoteType } from "../models";

const Note = ({ note }: { note: NoteType }) => {
  return (
    <div className="bg-yellow-800 p-5 flex justify-between cursor-pointer select-none">
      {/* 날짜 */}
      <div>{format(note.createdAt, "yyyy-MM-dd")}</div>
      {/* 무드 */}
      <div>{note.moodMemo}</div>
      {/* 선생님 확인 */}
      <div>확인!</div>
    </div>
  );
};

export default Note;
