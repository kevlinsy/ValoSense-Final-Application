import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import axios from "axios";
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import bg from './BG_Geo-Gradient.png';
import { useState,useEffect } from "react";

const Stats = () => {

  function formatName(user) {
    return user.fullName + ' ' + user.username;
  }

  const user = {
    fullName: 'Harper',
    username: 'Perez'
  };

  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

  function formatemail(email) {
    return user.email;
  }

  const email = {
    email: 'j@gmail.com',
  };
  function formatRankScore(rankScore) {
    return user.rankScore;
  }

  const rankScore = {
    rankScore: '100',
  };
  const tData = JSON.parse(localStorage.getItem('token'));

  const tData2= JSON.parse(localStorage.getItem('token'));

  const [data, setData] = tData.userData.rankGroup;

  useEffect(() => {

    //const url = "http://localhost:8080/api/auth/matchmaking";
    //const { data: res } = axios.get(url, data);

    });
      const loggedUser = tData.userData.username;
      const userEmail = tData.userData.email;
      const userRankScore = tData.userData.rankScore;
      const userRankGroup = tData.userData.rankGroup;

    const[data1, setData1] = useState([]);
    const[data2, setData2] = useState([]);
    const url = "http://localhost:8080/api/auth/matchmaking";
//    const getData1 = () => {
//      axios.post(url, {
//        data1:{email: userEmail}})
//    };

    const getData = () => {
      axios.post(url, {
        data: {rankGroup:userRankGroup, email: userEmail}})
      .then((response) => {
        console.log(response);
        setData1(response.data.slice(0,4))
        setData2(response.data.slice(4,9))
      });
    };
    useEffect(() => getData(),[]);

  return (
    <div style={{height:'100vh'}} className={styles.bodymain}>
      <header>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="styles.css" />
        <link href="http://fonts.cdnfonts.com/css/akira-expanded" rel="stylesheet"/>
        <link href="http://fonts.cdnfonts.com/css/planet-kosmos" rel="stylesheet"/>

        <style dangerouslySetInnerHTML={{ __html: "\n\n            {background-image: url(BG_Geo-Pink.png);background-size:cover;\n          color:#FFFFFF ; text-align:center}\n        " }} />


      </header>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>






          <Navbar.Brand href="#home"><img src="/Images/full_logo.png" alt="logo" style={{ height: "80px", width: "150px" }} /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="Main">Home</Nav.Link>
              <Nav.Link href="Matchmaking">Match Making</Nav.Link>
              <Nav.Link href="Leaderboard">Leaderboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="Stats">My Stats</Nav.Link>
              <Nav.Link href="Login">Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{display:'flex',flexDirection:'column'}}>
  <br />
  <br />
  <h1>MATCHMAKE</h1>
  {/*-<br>
<a><h3> &ensp;&ensp;&emsp;&emsp;&emsp;&emsp;Teammate </h3>
 <h3> Opponent</h3></a>-*/}
  {/*---your team column--*/}
  <div style={{height:'60vh'}} className="container">
    <div className="row">


      <div className="col-sm">

        <div className={styles.matchTable}>

        <table className="fixed" style={{borderCollapse: 'separate', borderRadius: '25px', border: '1px solid black', marginLeft: 'auto', marginRight: 'auto'}}>
          <thead>
            <tr>
              <th colSpan={2} style={{textAlign: 'center'}} className={styles.title}>TEAMMATE</th>
            </tr><tr>
              <th style={{textAlign: 'center'}}>Player
              </th><th style={{textAlign: 'center'}}>Score
                {/*-- first person--*/}
              </th></tr></thead>
          <tbody>
          <tr>
          <td>{userEmail}</td>
          <td>{userRankScore}</td>
          </tr>
          {data1.map((data) => (
            <tr>
              {/*--name 1st person-*/}
              <td>{data.email}
                {/*--score 1st person-*/}
              </td><td>{data.rankScore}
                {/*-- 2nd person--*/}
              </td>
              {/*--name 2nd person-*/}
              <td>
                {/*--score 2nd person-*/}
              </td><td>
              </td>
            </tr>

          )

          )}
            </tbody>
        </table>
        </div>



      </div>
      {/*--- end of your team column--*/}

      <div className="col-sm" style={{color: '#FFFFFF', fontSize: '5.6em', fontWeight: 500, textAlign: 'center', fontFamily: '"planet kosmos", sans-serif'}}><br /> VS

      </div>


      {/*---your opponent column--*/}
      <div className="col-sm">
        <table className="fixed" style={{borderCollapse: 'separate', borderRadius: '25px', border: '1px solid black', marginLeft: 'auto', marginRight: 'auto'}}>
          <thead>
            <tr>
              <th colSpan={2} style={{textAlign: 'center'}} className={styles.title}>OPPONENT</th>
            </tr><tr>
              <th style={{textAlign: 'center'}}>Player
              </th><th style={{textAlign: 'center'}}>Score
              </th></tr></thead>
              <tbody>

              {data2.map((data) => (
                <tr>
                    {/*-- 2nd person--*/}
                  {/*--name 2nd person-*/}
                  <td>{data.email}
                    {/*--score 2nd person-*/}
                  </td><td>{data.rankScore}
                  </td>
                </tr>
              )

              )}
                </tbody>
        </table>
      </div>



    </div>

</div>

        {/*footer*/}
        <div className="container-fluid-fixed-bottom">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <ul> <p className=" text-white nav col-md-0 justify-content footerLogos">© 2022 Valosense, Inc</p></ul>
            <a className="nav col-md-0 justify-content-center footerLogos" style={{ alignItems: 'center', justifyContent: 'center' }}>
              <img alt="valo" src="/Images/Vs_VS Logo White.png" style={{ height: 80, width: 80 }} /></a>
            <ul className="nav col-md-2 justify-content-end">
              <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Terms</a></li>
              <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Conditions</a></li>
              <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Contact</a></li>
            </ul>
          </footer>
        </div>
      </div>
    </div>

  );
};

export default Stats;
