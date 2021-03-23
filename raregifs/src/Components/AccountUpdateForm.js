import React, { useState } from 'react'
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
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(formData),
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
            .then(user => {
                setCurrentUser(user)
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