import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log('hello');
		try {
			if(localStorage.getItem('token') ){
				localStorage.removeItem("token");
			}
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);

			//console.log(res.data);
			localStorage.setItem("token", JSON.stringify(res.data));

			const tData= JSON.parse(localStorage.getItem('token'));

			window.location = "/stats";



		} catch (error) {

			alert("Wrong credentials. Please try again.");

			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};




	return (
		<div>
			<header>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
				<link rel="stylesheet" href="styles.css" />
				{/*navbar*/}

				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home"><img src="/Images/full_logo.png" alt="logo" style={{ height: "80px", width: "150px" }} /> </Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#features">Home</Nav.Link>
								<Nav.Link href="#features">Match Making</Nav.Link>
								<Nav.Link href="#pricing">Leaderboard</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href="#deets">My Stats</Nav.Link>
								<Nav.Link href="#deets">Login</Nav.Link>

							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				{/*orig*/}
				<style dangerouslySetInnerHTML={{ __html: "\n\n    body {background-image: url(images/bg.png);background-size:cover;\n    color:#FFFFFF ; text-align:center}\n  " }} />
			</header>
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col col-xl-10">
						<div className="card" style={{ borderRadius: '1rem', backgroundColor: '#212529' }}>
							<div className="row g-0">
								<div className="col-md-6 col-lg-5 d-none d-md-block">
									<img src="images/promo-login.jpeg" alt="login form" className="img-fluid" style={{ objectFit: 'fill', borderRadius: '1rem 0 0 1rem', height: 710, width: 580 }} />
								</div>
								<div className="col-md-6 col-lg-7 d-flex align-items-center">
									<div className="card-body p-4 p-lg-5" style={{ backgroundColor: '#212529' }}>
										<div>
											<div className=" form-outline mb-4 ">
												<img src="images/full_logo_horizontal.png" style={{ objectFit: 'contain', height: '60px', width: '200px', align: 'center' }} />
											</div>
											<h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
											{/* email*/}




											<form className={styles.form_container} onSubmit={handleSubmit}>
												<div className="form-outline mb-4">
													<input style={{width:'500px'}}
														type="email"
														id="form2Example17"
														name="email"
														onChange={handleChange}
														value={data.email}
														required
														placeholder="user@email.com"
														className="form-control form-control-lg"
														/>

													<label className="form-label" htmlFor="form2Example17">Email Address</label>
												</div>
												{/* end of email*/}
												{/* password*/}
												<div className="form-outline mb-4">
													<input style={{width:'500px'}} type="password"
														id="form2Example27"
														placeholder="Password"
														name="password"
														onChange={handleChange}
														value={data.password}
														required
														className="form-control form-control-lg" />

													<label className="form-label" htmlFor="form2Example27">Password</label>
												</div>

												<div className="pt-1 mb-4">

													<Button style={{ color: '#ffff' }} type="submit" variant="danger">Login</Button>

												</div>


											</form>
											{/* end of password*/}
											{/* button for log-in*/}

											{/* end of button for log-in*/}
											{/* button for forgot password */}
											<a className="small text-white" href="#!" style={{ float: 'left' }} ></a>
											{/* endof button for forgot password */}
											<a className="small text-white" href="Signup" style={{ float: 'right' }}> Register Now </a>
											<br />
											<div> Or Log In Using </div>
											<br />
											<div id="banner">
												<a href="https://auth.riotgames.com/login#client_id=prod-xsso-riotgames&code_challenge=Z6fGoVp8OEYCOxghnswSIQzKnIh7ksSXQAkjRtoetF8&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.riotgames.com%2Fredirect&response_type=code&scope=openid%20account&state=4a130ac7533083d0a6cd84afac">
													<div style={{ display: 'inline-block' }} >
														<img src="images/valo.png" style={{ heigh: 100, width: 100 }} />&nbsp;
													</div> </a>
												<a href="https://accounts.google.com/">
													<div style={{ display: 'inline-block' }} >
														<img src="images/google.png" style={{ heigh: 80, width: 80 }} />
													</div></a><a>
												</a><a href="https://www.facebook.com/">
													<div style={{ display: 'inline-block' }} >
														<img src="images/facebook.png" style={{ heigh: 80, width: 80 }} />
													</div> </a>
												<a href="https://appleid.apple.com/">
													<div style={{ display: 'inline-block' }} >
														<img src="images/apple.png" style={{ heigh: 100, width: 100 }} />

													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*footer*/}
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="container-fluid-fixed-bottom">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
					<ul> <p className=" text-white nav col-md-0 justify-content footerLogos">© 2022 Valosense, Inc</p></ul>
					<a className="nav col-md-0 justify-content-center footerLogos" style={{ alignItems: 'center', justifyContent: 'center' }}>
						<img src="images/logo_white.png" style={{ height: 80, width: 80 }} /></a>
					<ul className="nav col-md-2 justify-content-end">
						<li className="nav-item"><a href="#" className="nav-link px-2 text-white">Terms</a></li>
						<li className="nav-item"><a href="#" className="nav-link px-2 text-white">Conditions</a></li>
						<li className="nav-item"><a href="#" className="nav-link px-2 text-white">Contact</a></li>
					</ul>
				</footer>
			</div>
			{/*orig*/}
		</div>


	);
};

export default Login;
