import React from 'react';
import { useState } from "react";
import { useFormik } from 'formik'


function Workouts() {

    const [inputs, setInputs] = useState([{key: '', value: ''}]);
    const [exercise, setExercise] = useState([''])
    const [weight, setWeight] = useState([''])
    const [reps, setReps] = useState([''])
    /* let newInputs = [...inputs] */;
  



    const addHandler = ()=>{
        
  
      /*   newInputs.push({key: '', value: ''}); */
        setInputs((newInputs) => [...newInputs, ''])
    }

    const deleteHandler = (key)=>{
        const newInputs = inputs.filter((input,index) => index !== key);
        setInputs(newInputs);
    }

    const submitHandler = (event)=>{
        let newExercise = [...exercise]
        event.preventDefault();
       newExercise.push(exercise)
        setExercise(newExercise);
        setWeight('');
        setReps('');
        console.log(exercise, weight, reps)
    }

    function form() {
        
        inputs.map((input, key) =>(
            <form key={key} onSubmit={submitHandler}>
            <input placeholder='exercise' /* value={exercise} */ /* onChange={event => {
                setExercise(event.target.value)
            }} */ {...formik.getFieldProps('exercise')[key]}></input>
            <input placeholder='weight' /* value={weight} *//*  onChange={event => {
                setWeight(event.target.value)
            }} */ {...formik.getFieldProps('weight')[key]}></input>
            <input placeholder='reps' /* value={reps} */ /* onChange={event => {
                setReps(event.target.value)
            }} */ {...formik.getFieldProps('reps')[key]}></input>
            <button onClick={() => deleteHandler(key)}>Delete</button>
            <button type='submit'>Submit</button>
            </form>
            
    ))
    }

    const formik = useFormik({
        initialValues: {
          exercise: [],
          weight:[],
          reps: []
        }
      }); 

    

    return (
        <div>
                <h2>Fitness Tracker</h2>
                
                {inputs.map((input, key) =>(
                        <form key={key} onSubmit={submitHandler}>
                        <input placeholder='exercise' /* value={exercise} */ /* onChange={event => {
                            setExercise(event.target.value)
                        }} */ {...formik.getFieldProps('exercise')[key]}></input>
                        <input placeholder='weight' /* value={weight} *//*  onChange={event => {
                            setWeight(event.target.value)
                        }} */ {...formik.getFieldProps('weight')[key]}></input>
                        <input placeholder='reps' /* value={reps} */ /* onChange={event => {
                            setReps(event.target.value)
                        }} */ {...formik.getFieldProps('reps')[key]}></input>
                        <button onClick={() => deleteHandler(key)}>Delete</button>
                        <button type='submit'>Submit</button>
                        </form>
                        
                ))}
           
        <button onClick={addHandler}>Add Exercise</button>
       
        
        </div>
    );
}

export default Workouts;