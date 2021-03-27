import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login({ setCurrentUser }) {

    const history = useHistory() 
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("/login", formData) 
            .then((response) => {
                const { user, token } = response.data;
                localStorage.setItem("token", token);
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
                setCurrentUser(user);
                history.push("/");
            })
            .catch((error) => {
                setErrors(error.response.data.errors)
            });
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
            {errors.map((error) => (
                <p style={{ color: "red" }} key={error}>
                    {error}
                </p>
                ))}
        </form>  
    </div>
  );
}

export default Login;