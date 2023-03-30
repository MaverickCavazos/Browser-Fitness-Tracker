import React from "react";
import { useState } from "react";

function Workouts() {
  //state logic
  const [inputFields, setInputFields] = useState([
    { exercise: "", weight: "", reps: "" },
  ]);

  const handleFormChange = (index, event, type) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addHandler = () => {
    let newField = { exercise: "", weight: "", reps: "" };
    setInputFields([...inputFields, newField]);
  };

  const deleteHandler = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputFields);
    console.log(inputFields[0].exercise)
    console.log(inputFields[0].weight)
    console.log(inputFields[0].reps)
  };

  return (
    <div>
      <h2>Fitness Tracker</h2>
      <form onSubmit={submitHandler}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="exercise"
                placeholder="Exercise"
                onChange={(event) => {
                  handleFormChange(index, event, "str");
                }}
              ></input>
              <input
                type="number"
                name="weight"
                placeholder="Weight"
                onChange={(event) => {
                  handleFormChange(index, event, "num");
                }}
              ></input>
              <input
                type="number"
                name="reps"
                placeholder="Reps"
                onChange={(event) => {
                  handleFormChange(index, event, "num");
                }}
              ></input>
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </div>
          );
        })}

        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
      <button onClick={addHandler}>Add Exercise</button>
    </div>
  );
}

export default Workouts;