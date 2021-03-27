import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AccountUpdateForm({ currentUser, setCurrentUser }){
    
    const { id } = currentUser
    const history = useHistory()

    const [formData, setFormData] = useState({
        name: currentUser.name,
        password: currentUser.password,
    })

    function handleFormChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleUpdateFormSubmit(e) {
        e.preventDefault()
        axios.patch(`/users/${id}`, formData)
            .then((response) => {
                console.log(response.data)
                // setCurrentUser(response.data)
                history.push("/");
            })
    }

    const { name, password } = formData
    
    return (
        <form onSubmit={handleUpdateFormSubmit}>
            <input 
                type="text"
                name="name"
                placeholder={name}
                value={name}
                onChange={handleFormChange}
            />
              <input 
                type="text"
                name="password"
                placeholder={password}
                // value="password"
                value={password}
                onChange={handleFormChange}
            />
            <button type="submit" value="AccountUpdateForm">Update Account</button>
        </form>
    )

}

export default AccountUpdateForm;