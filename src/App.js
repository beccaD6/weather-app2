import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY="04922c6a834791352f263148c0bb6c0f";
class App extends React.Component {

	state ={
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}
	//async/await is a way to write asynchronous code in a way that looks synchronous. it is syntatic sugar 
	//over js promises
	//put async in front of the fn, await in the fn body and catch any errors
	getWeather = async (e) =>{
			e.preventDefault(); //prevents default refresh/flush all state behaviour when form submit occurs.
			const city=e.target.elements.city.value; //e from form render
			const country=e.target.elements.country.value;
		
			const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
			
			const data = await api_call.json();
			//if data doesnt exist, we entered invalid api call params. display same error message to UI
			
			if(city && country && api_call.ok){
				console.log(data);
				this.setState({
					temperature: data.main.temp,
					city: data.name,
					country: data.sys.country,
					humidity: data.main.humidity,
					description: data.weather[0].description,
					error: ""
				});
			}else{
				//pass error message to be displayed in form component.
				this.setState({
					temperature: undefined,
					city: undefined,
					country: undefined,
					humidity: undefined,
					description: undefined,
					error: "Please enter a valid country and/or city"				
				});


			}
		
	}

	render(){
		//make sure you only return everythign in one parent element
		//GIVE ACCESS to getWeather to form class so can call it on submit 
		//give acess to state to weather component for it to display api results
		return (
			<div>
			 <div className="wrapper">
				 <div className="main">
					 <div className="container">
					 	<div className="row">
						 	<div className="col-xs-5 title-container">
						 		<Titles />

						 	</div>
						 	<div className="col-xs-7 form-container">
						 		
					 	 		<Form getWeather={this.getWeather}/> 
						 	 	
								 <Weather 
								 	temperature={this.state.temperature} 
								 	city={this.state.city}
								 	country={this.state.country}
								 	humidity={this.state.humidity}
								 	description={this.state.description}
								 	error={this.state.error}
								 	/>
						 	</div>
					 	</div>
				 	</div>
			 	</div>
		 	</div>


			 
			
		</div>
		);
	}
};

//now other folders can import this Component

export default App; 