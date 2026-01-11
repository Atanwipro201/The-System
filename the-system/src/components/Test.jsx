import React from "react";

export default function Test(props) {
  const { setInput, next, input } = props;

  function handleCheckboxChange(e) {
    setInput((prev) => ({ ...prev, workout: e.target.checked }));
  }

  function handleProductivityChange(e) {
    setInput((prev) => ({ ...prev, productivity: Number(e.target.value) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (typeof next === "function") next();
  }
//the change of the statre is handled here
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Daily Test</h2>

        <label>
          Workout Completed:
          <input
            type="checkbox"
            name="workout"
            checked={input?.workout}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          Productivity Level:
          <input
            type="range"
            id="productivity"
            name="productivity"
            min="0"
            max="10"
            value={input?.productivity ?? 5}
            onChange={handleProductivityChange}
            required
          />
          <span style={{ marginLeft: 8 }}>{input?.productivity ?? 5}</span>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}