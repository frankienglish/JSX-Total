//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//Show a single h1 that says "Good morning" if between midnight and 12PM.
const date = new Date();
const time = date.getHours();
console.log(time);

var textGreeting = "";

const greeting = {
  color: ""
};

if (time > 0 && time < 12) {
  greeting.color = "red";
  textGreeting = "good Morning";
} else if (time > 12 && time < 18) {
  greeting.color = "green";
  textGreeting = "good Afternoon";
} else {
  greeting.color = "blue";
  textGreeting = "good Night";
}
ReactDOM.render(
  <h1 style={greeting}>{textGreeting}</h1>,
  document.getElementById("root")
);
