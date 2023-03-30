import React from 'react';
import { Link } from "react-router-dom";


function Welcome() {

    return (
        <div className='background-image'>

            <div className='welcome-container'>

                <h2 className='welcome-text'>Fitness Tracker</h2>

                <div>
                    <Link to='/Workouts'>
                        <button className='welcome-button'> Register </button>
                    </Link>

                    <button className='welcome-button' > Login </button>
                </div>

            </div>

        </div>
    );
}


export default Welcome;