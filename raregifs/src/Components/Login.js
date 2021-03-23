import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Login({ setCurrentUser }) {

    const history = useHistory() 
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    console.log(errors)

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
        })
            .then((res) => {
                return res.json().then(data => {
                    if (res.ok) {
                        return data;
                    } else {
                        throw data;
                    }
                });
            })
            .then((data) => {
                const { user, token } = data;
                localStorage.setItem("token", token);
                setCurrentUser(user);
                history.push("/");
            })
            .catch((error) => {
                setErrors(error.errors);
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
            {/* {errors.map(error => (
                <p style={{ color: "red" }} key={error}>
                    {error}
                </p>
                ))} */}
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