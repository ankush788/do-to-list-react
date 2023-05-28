import React, { useState } from "react";

function InputArea(props) {
  let [currentText, setText] = useState("");

  function updatingText(event) {
    setText((currentText = event.target.value));
  }
  return (
    <div className="form">
      <input type="text" value={currentText} onChange={updatingText} />
      <button
        onClick={() => {
          setText("");
          props.toAddItem(currentText);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
