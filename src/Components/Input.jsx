const Input = ({ inputChangeHandler, addTodoHandler, value }) => {
  return (
    <>
      <div className="input-container">
        <div className="input">
          <input
            type="text"
            placeholder="Enter a task..."
            onChange={inputChangeHandler}
            onKeyPress={(e) => e.key === "Enter" && addTodoHandler()}
            value={value}
          />
          <div className="add-btn" onClick={addTodoHandler}>
            +
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
