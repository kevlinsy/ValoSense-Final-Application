import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
	const [data, setData] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
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
				{/*orig*/}
				<style dangerouslySetInnerHTML={{ __html: "\n\nbody {background-image: url(images/BG_Geo-Gradient.png);background-size:cover;\ncolor:#FFFFFF ; text-align:center}\n" }} />
			</header>

			<div className={styles.bodymain}>
				<section className="vh-100 gradient-custom  ">
					<div className="container py-5 h-100 ">
						<div className="row justify-content-center align-items-center h-100 ">
							<div className="col-12 col-lg-9 col-xl-7 ">
								<div className="card shadow-2-strong card-registration  " style={{ borderRadius: '15px', backgroundColor: '#212529' }}>
									<div className="card-body p-4 p-md-5" >
										<div className=" form-outline mb-4 ">
											<img src="images/full_logo_horizontal.png" style={{ objectFit: 'contain', height: '60px', width: '200px', align: 'center' }} />
										</div>
										<h3 className="">Create Your Account</h3>

										<form className={styles.form_container} onSubmit={handleSubmit}>
										<label> Full Name</label>
											<input
												type="text"
												placeholder="Enter Full Name"
												name="fullName"
												onChange={handleChange}
												value={data.fullName}
												required
												className={styles.input}
											/>
											<label> Username </label>
											<input
												type="text"
												placeholder="Enter Username"
												name="username"
												onChange={handleChange}
												value={data.username}
												required
												className={styles.input}
											/>

											<label> Email Address </label>

											<input
												type="email"
												placeholder="Enter Email Address"
												name="email"
												onChange={handleChange}
												value={data.email}
												required
												className={styles.input}
											/>


											<label> Password </label>
											<input
												type="password"
												placeholder="Enter Password"
												name="password"
												onChange={handleChange}
												value={data.password}
												required
												className={styles.input}
											/>





											<div className="pt-1 mb-4">

												<Button style={{ padding: '12px', borderRadius: '10px', width:'650px', color: '#ffff' }} type="submit" variant="danger">Register</Button>

											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*footer*/}
				<br />
				<br />
				<br />
				<br />
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

			{/*orig*/}
		</div>

	);
};

export default Signup;
