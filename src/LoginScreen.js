import React from "react";

const LoginScreen = () => {
 const [userName, setUserName] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [error, setError] = React.useState("");

 const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === "admin" && password === "admin") {
      console.log(`Login successful with ${userName} and ${password}`)
    } else {
      setError("Invalid username or password");
    }
 }

 return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type={"text"}  value={userName} onChange={(event) => setUserName(event.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type={"password"} value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <br />
            <button type="submit">Login</button>
        </form>
    </div>
 )
};
export default LoginScreen;
