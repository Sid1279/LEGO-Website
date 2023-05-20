import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { GoogleLogin } from 'react-google-login';

const Login = () => {
	// const responseGoogle = async (response) => {
	// 	try {
	// 	  const url = 'http://localhost:8080/api/auth/google';
	// 	  const { data: res } = await axios.post(url, { tokenId: response.tokenId });
	// 	  localStorage.setItem('token', res.data);
	// 	  window.location = '/';
	// 	} catch (error) {
	// 	  setError('Failed to sign in with Google.');
	// 	  console.error('Error:', error); // Added debug statement
	// 	}
	//   };
	  
	// const GoogleSignIn = () => {
	// return (
	// 	<GoogleLogin
	// 	clientId="527254420394-vvcod077lhcabh9gier1mdptgl8e27ue.apps.googleusercontent.com"
	// 	buttonText="Sign In With Google"
	// 	onSuccess={responseGoogle}
	// 	onFailure={responseGoogle}
	// 	cookiePolicy={'single_host_origin'}
	// 	/>
	// );
	// };
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<p>Email</p>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<p>Password</p>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button className={styles.green_btn}>
							Sign In
						</button>
						{/* <GoogleSignIn /> */}
					</form>
				</div>
				<div className={styles.right}>
					<h1>New here?</h1>
					<Link to="/signup">
						<button type="button" className={styles.blue_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
