import { useLocation } from "react-router-dom";

function Main(){
	let location=useLocation();

	console.log(location);

	let contentStyle={
		marginTop: 20,
		padding: 20,
		height: 300,
		backgroundColor: "#f4f4f4"
	};

	return(
		<div className="content" style={contentStyle}>
			Main Page

			{
				location.state === null ? "" : " from portfolio"+location.state
			}
		</div>
	);
}

export default Main;