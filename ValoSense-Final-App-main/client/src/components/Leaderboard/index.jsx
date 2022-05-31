import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table'

import bg from './BG_Spikes - Gradient.png';
const Leaderboard = () => {

  return (
    <body>
      <div className={styles.bodymainlead}>

    <div>
      <header>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link rel="stylesheet" href="styles.css" />
        <link href="http://fonts.cdnfonts.com/css/akira-expanded" rel="stylesheet"/>
        <link href="http://fonts.cdnfonts.com/css/planet-kosmos" rel="stylesheet"/>


        <style dangerouslySetInnerHTML={{ __html: "\n\n          body {background-image: url(BG_Spikes - Gradient.png);background-size:cover;\n          color:#FFFFFF ; text-align:center}\n        " }} />


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

      <div>
    <br />
    <br />
    <h1>LEADERBOARD</h1>
    <table style={{borderCollapse: 'separate !important', borderRadius: '25px', border: '1px solid black', marginLeft: 'auto', marginRight: 'auto'}}>
      <thead>
        <tr>
          <th>
          </th><th>PLAYER
          </th><th>RANK
          </th><th>SCORE
          </th><th># MATCHES
          </th></tr></thead>
      <tbody>
        <tr>
          <td><img className="product-image" src="images/DPjoe.png" /></td>
          <td>Joe Ilagan
          </td><td>1st Place
          </td><td>369
          </td><td>#123
          </td></tr><tr>
          <td><img className="product-image" src="images/DPchesca.png" /></td>
          <td>Chesca
          </td><td>2nd Place
          </td><td>270
          </td><td>#456
          </td></tr><tr>
          <td><img className="product-image" src="images/DPjulia.png" /></td>
          <td>Julia
          </td><td>2nd Place
          </td><td>270
          </td><td>#789
          </td></tr><tr>
          <td><img className="product-image" src="images/DPkevlin.png" /></td>
          <td>Kevlin
          </td><td>2nd Place
          </td><td>270
          </td><td>#987
          </td></tr><tr>
          <td><img className="product-image" src="images/DPjohn.png" /></td>
          <td>John
          </td><td>2nd Place
          </td><td>270
          </td><td>#654
          </td></tr><tr>
          <td><img className="product-image" src="images/DPjoben.png" /></td>
          <td>Joben Ilagan
          </td><td>Best Prof
          </td><td>1,000,000
          </td><td>#321
          </td></tr></tbody>
    </table>
    {/*footer----------------------------------------*/}
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

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
    </body>

  );
};

export default Leaderboard;
