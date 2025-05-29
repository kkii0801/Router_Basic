import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Detail from "./Detail";

function App(){
	let containerStyle={
		padding: 20
	};

	return(
		<div className="container" style={containerStyle}>
			<Navigation />
			<Routes>
				<Route path="/" element={<Main />}/>
				<Route path="/portfolio/:path" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;