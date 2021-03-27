import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Signup({ setCurrentUser }) {

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
        axios.post("/signup", formData)
            .then((response) => {
                const { user, token } = response.data;
                localStorage.setItem("token", token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                setCurrentUser(user);
                history.push("/");
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
            });
    }

    const { name, password } = formData
 
  return (
    <div className="signup">
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input
                type="text"
                name="name"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <label>password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                autoComplete="current-password"
            />
            <input type="submit" value="Signup" />
            {errors.map((error) => (
                <p style={{ color: "red" }} key={error}>
                    {error}
                </p>
                ))}
        </form>  
    </div>
  );
}

export default Signup;