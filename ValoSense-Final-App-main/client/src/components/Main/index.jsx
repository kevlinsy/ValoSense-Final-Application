import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'


import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';

import bg from './BG_Geo-Grey.png';

import Carousel from 'react-bootstrap/Carousel'



const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (

    <div>
      <header>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />


        <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/carousel/" />

        <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />





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


      </header>

      <body>
        <div className={styles.bodymain}>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/BG-17.png"
                alt="First slide"
              />
              <Carousel.Caption>
              <div className={`text-left ${styles["carouselcaption"]}`}>
            <h1>MATCH MAKING</h1>
            <p><a className="btn btn-lg btn-danger" href="matchmaking" role="button">PLAY NOW</a></p>
          </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/BG-17.png"
                alt="First slide"
              />
              <Carousel.Caption>
              <div className={`text-left ${styles["carouselcaption"]}`}>
            <h1>MATCH MAKING</h1>
            <p><a className="btn btn-lg btn-danger" href="Matchmaking" role="button">PLAY NOW</a></p>
          </div>
              </Carousel.Caption>
            </Carousel.Item>


          </Carousel>





          <div className={styles.bodycontent}>







            <div className="container marketing">

              <div className="row">
                <div className="col-lg-4">
                  <img className="rounded-circle" src="/Images/medal.png" alt="Generic placeholder " width="140"
                    height="140" />
                  <h2>WINNERS OF THE COMPETITION</h2>
                  <p>This 2022, 3 winners joined us in competing against the top....</p>
                  <p><a className="btn btn-secondary" href="/" role="button">View details »</a></p>
                </div>
                <div className="col-lg-4">
                  <img className="rounded-circle" src="/Images/data-server.png" alt="Generic placeholder " width="140"
                    height="140" />
                  <h2>SERVER UPDATES <br /> MAY 20,2022</h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
                    porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.</p>

                  <p><a className="btn btn-secondary" href="/" role="button">View details »</a></p>
                </div>
                <div className="col-lg-4">
                  <img className="rounded-circle" src="/Images/competitive.png" alt="Generic " width="140"
                    height="140" />
                  <h2>NEW TOURNAMENT <br /> JUNE 2022</h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
                    porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                    ut fermentum massa justo sit amet risus.</p>
                  <p><a className="btn btn-secondary" href="/" role="button">View details »</a></p>
                </div>
              </div>

            </div>



            <hr className={styles.featurettedivider} />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className={styles.featuretteheading}>First featurette heading. <span className="text-muted">It'll blow
                  your mind.</span></h2>
                <p className={`lead ${styles["newlead"]}`}>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                  euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                  tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                  style={{ width: "500 px", height: "500 px" }} src="/Images/picture.jpg_large" data-holder-rendered="true" />
              </div>
            </div>

            <hr className={styles.featurettedivider} />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className={styles.featuretteheading}>Oh yeah, it's that good. <span className="text-muted">See for
                  yourself.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                  euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                  tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5 order-md-1">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                  src="/Images/picture1.jpeg" data-holder-rendered="true" style={{ width: "500px", height: "500px" }} />
              </div>
            </div>

            <hr className={styles.featurettedivider} />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className={styles.featuretteheading}>And lastly, this one. <span className="text-muted">Checkmate.</span>
                </h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis
                  euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                  tellus ac cursus commodo.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                  src="/Images/picture2.jpeg" data-holder-rendered="true" style={{ width: "500px", height: "500px" }} />
              </div>
            </div>











            <div className="container-fluid-fixed-bottom">
              <footer className={`d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ${styles["foot"]}`}  >

                <ul>
                  <p className=" text-white nav col-md-0 justify-content footerLogos">&copy; 2022 Valosense, Inc</p>
                </ul>

                <a href="/" className="nav col-md-0 justify-content-center footerLogos"
                  style={{ alignItems: "center", justifyontent: "center " }}>

                  <img src={'/Images/logo_white.png'} style={{ width: "80px", height: "80px" }} alt="gen" /></a>


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

    </div>









  );
};

export default Main;
