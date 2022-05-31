import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table'
import React, { useState } from 'react';


import bg from './BG_Geo-Pink.png';
import ReactDOM from 'react-dom/client';



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

  function formatstat1(dmgPerRound) {
    return user.dmgPerRound;
  }

  const dmgPerRound = {
    dmgPerRound: '69',
  };

  function formatstat2(killDeathRatio) {
    return user.killDeathRatio;
  }

  const killDeathRatio = {
    killDeathRatio: '1',
  };

  function formatstat3(winRate) {
    return user.winRate;
  }

  const winRate = {
    winRate: '50',
  };

  const tData = JSON.parse(localStorage.getItem('token'));

  const loggedUser = tData.userData.username;

  const statDmgPerRound = tData.userData.dmgPerRound;

  const statKillDeathRatio = tData.userData.killDeathRatio;

  const statWinRate = tData.userData.winRate;
  return (
    <div>
      <header>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="styles.css" />

        <style dangerouslySetInnerHTML={{ __html: "\n\n          body {background-image: url(BG_Geo-Pink.png);background-size:cover;\n          color:#FFFFFF ; text-align:center}\n        " }} />


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
      <div className={styles.bodymain}>

        <div className="container py-5 h-100" style={{ color: 'black !important' }}  >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem', backgroundColor: '#FF4457' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block" style={{ borderRadius: '1rem' }}>
                    <img alt="valo" src="/Images/stat.jpg" className="img-fluid" style={{ borderRadius: '1rem', height: 545, width: 450 }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5" style={{ backgroundColor: '#FF4457', borderRadius: '1rem' }}>

                      <h1 style={{ outline: "0px" }}>  Welcome {loggedUser}! </h1>
                      <br />


                      <h1 style={{ outline: "0px" }} > Your Stats: </h1>


                      <Table style={{ background: 'transparent' }} borderless responsive>
                        <thead>
                          <tr>
                            < th style={{ color: 'black', borderColor: 'black' }} /><th style={{ color: 'black' }}>Metric</th><th style={{ color: 'black' }}>Score</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ color: 'black' }}><img style={{ width: "50px" }} src="/Images/gun.png" align="center" alt="valo" /></td><td style={{ color: 'black' }}>Damage per Round</td><td style={{ color: 'black' }}>{statDmgPerRound}</td>
                          </tr>
                          <tr>
                            <td style={{ color: 'black' }}><img style={{ width: "50px" }} src="/Images/scene.png" alt="valo" /></td><td style={{ color: 'black' }}>Kill/Death Ratio</td><td style={{ color: 'black' }}>{statKillDeathRatio}</td>
                          </tr>
                          <tr>
                            <td style={{ color: 'black' }}><img style={{ width: "50px" }} src="/Images/success.png" alt="valo" /></td><td style={{ color: 'black' }}>Win Rate</td><td style={{ color: 'black' }}>{statWinRate}</td>
                          </tr>

                        </tbody>
                      </Table>




                    </div>
                  </div>
                </div>
              </div>
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
