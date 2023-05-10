import Add from "./component/Add";
import Records from "./component/Records";
import styled from "styled-components";
import { useState } from "react";

const StyledDiv = styled.div`
  background-color: #5A8CC8;
  width: 1500px;
  display: flex;
`;

function App() {
    const [records, setRecords] = useState([]);

    const addRecord = (emo, emoType, dateString, hws) => {
      const newRecord = [emo, emoType, dateString, hws];
      setRecords([...records, newRecord]);
    }


  return (
    <StyledDiv  className="App">
      <Add addRecord={addRecord}/>
      <Records records={records}/>
    </StyledDiv >
  );
}

export default App;
