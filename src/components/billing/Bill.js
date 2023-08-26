
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState([{}]);
  const [data, setData] = useState([]);

  function handleChange(i, e) {
    e.preventDefault();

    setInput([
      {
        id: i,
        value: e.target.value
      }
    ]);
  }

//   function handleAddInput() {
//     const values = [...input];
//     values.push({ value: null });
//     setInput(values);
//   }

  const handleSave = () => {
    let value = input?.map((item) => {
      return item.value;
    });
    if (!value || /^\s*$/.test(value)) {
      return;
    }

    const newData = [...data, ...input];

    setData(newData);

    setInput([]);
  };

  return (
    <div className="App">
      {/* <button type="button" className="btn" onClick={() => handleAddInput()}>
        Add Input fields
      </button> */}

      {input?.map((input, idx) => {
        return (
          <div key={input.id}>
            <input
              type="text"
              placeholder="Enter text"
              onChange={(e) => handleChange(idx, e)}
              value={input.value}
            />
          </div>
        );
      })}

      {/* <h2>Display Added Fields and Edit</h2> */}
      {/* {data?.map((item) => {
        return (
          <>
            <input defaultValue={item.value} />
          </>
        );
      })} */}

      <button className="btn" onClick={handleSave}>
        Save
      </button>

      {data?.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              flexDorection: "column",
              marginTop: "20px"
            }}
          >
            {item.value}
          </div>
        );
      })}
    </div>
  );
}
