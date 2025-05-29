# Router_Basic
사용된 도구 : React, JavaScript, Router <br />
:point_right: [Router_Basic](https://router-basic-roan.vercel.app/)

***

### 작동 예시
<div align="center"><img src="https://github.com/kkii0801/Readme_files/blob/main/Rou_BS/Router_Basic.gif?raw=true"></div>

## 주요 컴포넌트 설명

1. App.js
2. Navigation.js
3. Main.js
4. Detail.js

***

## App.js

### 코드 설명
```
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Detail from "./Detail";
```
react-router-dom에서 Routes와 Route를 가져와서 라우팅을 설정합니다. <br />
Navigation, Main, Detail 컴포넌트를 가져와서 사용합니다.
```
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
```
Navigation 컴포넌트를 포함하여 네비게이션 바를 표시합니다. <br />
Routes 컴포넌트를 사용하여 여러 Route를 정의합니다: <br />
"/" 경로에 대해 Main 컴포넌트를 렌더링합니다. <br />
"/portfolio/:path" 경로에 대해 Detail 컴포넌트를 렌더링합니다. 여기서 :path는 동적 세그먼트로, URL에 따라 다른 값을 가질 수 있습니다.
***

## Navigation.js

### 코드 설명
```
import { useNavigate } from "react-router-dom";
```
react-router-dom에서 useNavigate 훅을 가져와서 페이지를 프로그래밍 방식으로 이동할 수 있도록 합니다.
```
function Navigation(){
	let navigate=useNavigate();
```
useNavigate를 호출하여 navigate 함수를 생성합니다. 이 함수는 다른 페이지로 이동하는 데 사용됩니다.
```
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
```
각 버튼은 클릭 시 navigate 함수를 호출하여 해당 페이지로 이동하는 기능을 가집니다. <br />
"Main Page" 버튼은 메인 페이지로 이동합니다. <br />
"Portfolio1 Page"부터 "Portfolio4 Page"까지의 버튼은 각각 포트폴리오 페이지로 이동합니다.
***

## Main.js

### 코드 설명
```
import { useLocation } from "react-router-dom";
```
react-router-dom에서 useLocation 훅을 가져와서 현재 위치 정보를 얻습니다.
```
function Main(){
	let location=useLocation();
```
useLocation을 호출하여 현재 위치 정보를 location 변수에 저장합니다.
```
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
```
location.state가 null이 아닐 경우, "from portfolio"와 함께 상태값을 표시합니다. <br />
이는 사용자가 포트폴리오 페이지에서 돌아온 경우에 해당합니다.

***

## Detail.js

### 코드 설명
```
import { useNavigate, useLocation, useParams } from "react-router-dom";
```
react-router-dom에서 useNavigate, useLocation, useParams 훅을 가져와서 라우팅 관련 기능을 사용합니다.
```
function Detail(){
	let navigate=useNavigate();
	let location=useLocation();
	let params=useParams();
```
useNavigate를 통해 페이지 전환을 위한 navigate 함수를 가져옵니다. <br />
useLocation을 사용하여 현재 위치 정보를 location 변수에 저장합니다. <br />
useParams를 사용하여 URL에서 동적 세그먼트를 가져와 params에 저장합니다. (ex : /portfolio/:path에서 path를 추출합니다.)
```
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
```
포트폴리오의 상세 정보를 표시하기 위해 params.path 값을 사용하여 "Detail Page : Portfolio {params.path}"라는 텍스트를 렌더링합니다.<br />
"Main Page Back" 버튼을 클릭하면 navigate 함수를 호출하여 메인 페이지로 이동합니다. 이때 params.path 값을 상태로 함께 전달합니다.

### 요약
이 구조는 메인 페이지에서는 사용자가 포트폴리오 페이지에서 돌아올 때 상태 정보를 확인할 수 있도록 하고, 상태가 존재하면 화면에 표시, 없을 경우에는 표시하지 않습니다.<br />
또한 상세 페이지에서는 사용자가 특정 포트폴리오 항목을 클릭했을 때 해당 정보를 보여주고, 메인 페이지로 돌아갈 수 있는 버튼을 제공하며 클릭 시 현재 포트폴리오의 정보를 상태로 전달합니다.

