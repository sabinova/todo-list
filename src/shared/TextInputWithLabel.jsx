import React from 'react';
function TextInputWithLabel({ elementId, labelText, onChange, inputRef, value }) {
  return (
    <>
      <label htmlFor={elementId}>{labelText}</label>
      <input
        type="text"
        id={elementId}
        ref={inputRef}
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default TextInputWithLabel;