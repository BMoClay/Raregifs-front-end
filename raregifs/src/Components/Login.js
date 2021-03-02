import React, { useState } from 'react'

function Login({ setCurrentUser }) {

    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST"
        })
            .then(res => res.json())
            .then((user) => {
                setCurrentUser(user)
            })
    }
 
  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input
                type="text"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
            />
            <label>password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
            />
            <input type="submit" value="Login" />
        </form>  
    </div>
  );
}

export default Login;