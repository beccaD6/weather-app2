import React from "react";

//think of Form component like an arrow fn that takes props (think of like fn params) and returns what it renders to UI

const Form= props =>(
		<form onSubmit={props.getWeather}>
			<div className="row">
				<div className="col-xs-4">
					<input type="text" className="form-control" name="city" placeholder="City.."/>
				</div>
				<div className="col-xs-4">
					<input type="text" className="form-control" name="country" placeholder="Country.."/>
				</div>
			
				<div className="col-xs-3">
					<button className="btn"> Get Weather </button>
				</div>
			</div>
		</form>
);



export default Form;