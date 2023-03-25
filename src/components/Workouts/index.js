import React from 'react';
import { useState } from "react";



function Workouts() {

    const [inputs, setInputs] = useState([{ key: '', value: '' }]);
    const [exercise, setExercise] = useState({
        exercise:'',
        weight:'',
        reps:''
    })
    





    const addHandler = () => {


       
        setInputs((newInputs) => [...newInputs, ''])
    }

    const deleteHandler = (key) => {
        const newInputs = inputs.filter((input, index) => index !== key);
        setInputs(newInputs);
    }

 /*    const submitHandler = (event) => {
        let newExercise = [...exercise]
        event.preventDefault();
        newExercise.push(exercise)
        setExercise(newExercise);
        setWeight('');
        setReps('');
        
    } */



  

    function handleChange(e) {
        const value = e.target.value;
        setExercise({
          ...exercise,
          [e.target.name]: value
        });
     
      }

      console.log(exercise)




    return (
        <div>
            <h2>Fitness Tracker</h2>

            {inputs.map((input, key) => (
                <form onChange={(e) => handleChange(e)} key={key} >
                    <input placeholder='exercise'  name='exercise' ></input>
                    <input placeholder='weight' name='weight'  ></input>
                    <input placeholder='reps' name='reps'   ></input>
                    <button onClick={() => deleteHandler(key)}>Delete</button>
                    <button type='submit'>Submit</button>
                </form>

            ))}

            <button onClick={addHandler}>Add Exercise</button>


        </div>
    );
}

export default Workouts;