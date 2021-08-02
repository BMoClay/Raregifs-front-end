import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

function Signup({ setCurrentUser }) {

    const history = useHistory()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    console.log(errors)

    function responseGoogle(response){
        if (response.tokenId) {
            axios.post("/login/google", null, {
                headers: {
                    Authorization: `Bearer ${response.tokenId}`,
                },
            })
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
    }

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
        <form style={{margin: '10px'}} onSubmit={handleSubmit}>
            <h4>Create a username and password...</h4>
            <label>name</label>
            <input
                type="text"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                // value={name}
                // onChange={handleChange}
            />
            <label>password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                // value={password}
                // onChange={handleChange}
                autoComplete="current-password"
            />
            <input type="submit" value="Signup" />
            {errors.map((error) => (
                <p style={{ color: "red" }} key={error}>
                    {error}
                </p>
                ))}
        </form>
        <hr/>
        <div style={{margin: '10px'}}>
            <h4>Or signup with Google</h4>
            <GoogleLogin 
                style={{margin: '10px'}}
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Signup"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />    
        </div>
    </div>
  );
}

export default Signup;