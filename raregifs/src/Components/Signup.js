import React, { useState } from 'react'

function Signup({ setUser }) {

    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signup", {
            method: "POST"
        })
            .then(res => res.json())
            .then((user) => {
                setUser(user)
            })
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
        </form>  
    </div>
  );
}

export default Signup;