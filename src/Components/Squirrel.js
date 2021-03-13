import React from 'react';

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>SQUIRREL CARD!</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age==="Adult" ? "🧓" : "🍼"}</p>
      <p>Color: {props.color==="Gray" ? "Gray" : "Not Gray"}</p>
      <p>{props.running ? "🏃" : ""}</p>
      <p>{props.eating ? "🍴" : ""}</p>
      <p>{props.approaches ? "Approaching" : ""}</p>
      <p>{props.climbing ? "🧗" : ""} </p>
    </div>
  );
}

export default Squirrel;
