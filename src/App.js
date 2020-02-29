import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {
	render(){
		//make sure you only return everythign in one parent element
		return (
			<div>
			 <Titles />
			 <Form />
			 <Weather />
			</div>
		);
	}
};

//now other folders can import this Component

export default App; 