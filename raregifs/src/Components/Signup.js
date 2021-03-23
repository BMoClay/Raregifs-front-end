import React, { useState } from 'react'
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
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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