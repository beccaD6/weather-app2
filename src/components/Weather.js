import React from "react";

class Weather extends React.Component{
	
	render(){
		//use and operator to only display below fields if we have the input from api already/props exist
		return(
			<div> 
				{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
				{this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
				{this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
				{this.props.description && <p>Conditions: {this.props.description}</p> }
				{ this.props.error && <p> {this.props.error} </p> }
			</div>
		);
	}

}
export default Weather;