import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
//import Stats from "./components/Stats";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Stats from "./components/Stats";
import Leaderboard from "./components/Leaderboard";
import Matchmaking from "./components/Matchmaking";




function App() {

	if ( localStorage.getItem('token')){ 

		try{
			const tData= JSON.parse(localStorage.getItem('token'));
			const user = tData.token;
		}

		catch (err){
			console.log(err);
		}

	

	}

	

	return (
		<Routes>
			<Route path="/main" exact element={<Main />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/index" exact element={<Main />} />
			<Route path="/stats" exact element={<Stats/>} />
			<Route path="/leaderboard" exact element={<Leaderboard/>} />
			<Route path="/matchmaking" exact element={<Matchmaking/>} />
			<Route path="/newmatchmaking" exact element={<newMatchmaking/>} />

		</Routes>
	);
}

export default App;
