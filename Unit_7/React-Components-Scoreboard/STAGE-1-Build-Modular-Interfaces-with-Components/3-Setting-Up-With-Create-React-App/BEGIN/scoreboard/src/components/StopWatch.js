import React, {useState, useEffect} from "react";

/*this is a utility, not core part of project
The state of stopwatch will need to keep updating constantly */

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    
    //accepts 2 arguments, function, aka the side effect and a dependancy array
    useEffect(() => {
        let id;
        if (isRunning){
            //runs code in a fixed time interval
            id = setInterval(() => 
            { setElapsedTime(prevTime => prevTime + 1);
        }, 1000);
        }//cancels any time repeated actions
        return () => {
        clearInterval(id);
        }
    },[isRunning]);

    return(
        <div className='stopwatch'>
            <h2>Stopwatch</h2>
            <span className='stopwatch-time'>{elapsedTime}</span>
            {/*The onClick event will call the function setIsRunning received from useState hook*/}
            {/* If isRunning = false, then make it not false which is true */}
            <button onClick={() => setIsRunning((prevValue) => !prevValue)}>
                {isRunning ? "Stop" : "Start" } 
            </button>
            <button onClick={() => setElapsedTime(0)}>Reset</button>
        </div>
    );
}

export default StopWatch;