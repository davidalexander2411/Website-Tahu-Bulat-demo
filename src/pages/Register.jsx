function Register() {
	return (
		<div className="w-full h-full bg-blue-100">
			<h1>Register</h1>
			<form>
				<input type="text" placeholder="Username" />
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Register</button>
			</form>
		</div>
	);
}

export default Register;
