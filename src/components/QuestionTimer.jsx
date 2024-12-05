import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  //We shouldwrap the setTimeout inside useEffect(), because otherwise when we update the remainingtime the componentexecutes againand this timerwould be re-created
  //Here we add dependencies because setTimeout() deals with the props timeout and onTimeout. This useEffect() gets re-executed when the either of the dependencies changes.

  useEffect(() => {
    console.log("SetTimeout");
    const timer = setTimeout(() => {
      return onTimeout();
    }, timeout);

    //This is the clear function, which helps to clear the happening timeout before the new timeout starts
    return () => {
      return clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  //If I don't create the setInterval() using useEffect() then it would createan infinite loop, beacuse we're updating the state  remainingTime using setRemainingTime() which would re-execute the component function that leads to again create a new setInterval() that again update the state and again re-execute the component.
  //And that's the reason we thought of using useEffect(), so that setInterval() gets executed only on the change of dependencies. But here in this no dependencies, beacuse there are no props and state values that we are using inside setInterval()

  useEffect(() => {
    console.log("setInterval");
    const interval = setInterval(() => {
      return setRemainingTime((previousRemainingTime) => {
        return previousRemainingTime - 100;
      });
    }, 100);

    //This is the clear function, which helps to clear the happening interval before the new interval starts
    return () => {
      return clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={remainingTime}
      max={timeout}
      className="w-[50%] h-2 [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-value]:bg-[#9e5ef8]"
    />
  );
}
