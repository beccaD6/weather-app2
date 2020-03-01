import React from "react";

//think of Form component like an arrow fn that takes props (think of like fn params) and returns what it renders to UI

const Form= props =>(
		<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City.."/>
		<input type="text" name="country" placeholder="country.."/>
		<button> Get Weather </button>
		</form>
);



export default Form;