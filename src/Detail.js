import { useNavigate, useLocation, useParams } from "react-router-dom";

function Detail(){
	let navigate=useNavigate(); // 링크를 거는 방법
	let location=useLocation(); // 링크에 대한 정보, 객체 정보
	let params=useParams(); // 상세 링크에 대한 정보 portfolio/:path

	// console.log(location); // pathName : 링크 경로 / state : 히스토리 데이터
	// console.log(params); // 상세 링크 정보 { path : "1" }

	let contentStyle={
		marginTop: 20,
		padding: 20,
		height: 300,
		backgroundColor: "#f4f4f4"
	};

	return(
		<div className="content" style={contentStyle}>
			<p>Detail Page : Portfolio{params.path}</p>
			<button onClick={() => {navigate("/", { state: params.path })}}>Main Page Back</button>
		</div>
	);
}

export default Detail;