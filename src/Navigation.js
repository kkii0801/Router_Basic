import { useNavigate } from "react-router-dom";

function Navigation(){
	let navigate=useNavigate();

	let buttonStyle={
		marginRight: 8,
		marginTop: 20,
		padding: 10,
		fontSize: 14,
		backgroundColor: "#999",
		color: "#fff",
		border: "none",
		cursor: "pointer"
	};

	return(
		<nav>
			<button style={buttonStyle} onClick={() => {navigate("/")}}>Main Page</button>
			<button style={buttonStyle} onClick={() => {navigate("/portfolio/1")}}>Portfolio1 Page</button>
			<button style={buttonStyle} onClick={() => {navigate("/portfolio/2")}}>Portfolio2 Page</button>
			<button style={buttonStyle} onClick={() => {navigate("/portfolio/3")}}>Portfolio3 Page</button>
			<button style={buttonStyle} onClick={() => {navigate("/portfolio/4")}}>Portfolio4 Page</button>
		</nav>
	);
}

export default Navigation;