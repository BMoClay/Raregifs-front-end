import React, { useState, useEffect } from 'react'
import UserList from './UserList'

function UserPage({ 
            currentUser, 
            onAcquireArtwork, 
            acquisitions,
        }){
    
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(usersArray => {
                setUsers(usersArray);
            })
      }, [])

    useEffect(() => {
        fetch('http://localhost:3000/comments')
            .then(r => r.json())
            .then(commentsArray => {
                setComments(commentsArray);
            })
    }, [])

    function handleAddComment(newComment) {
        const updatedCommentsArray = [newComment, ...comments];
        setComments(updatedCommentsArray)
    } 

    function handleDeleteComment(commentObj) {
        const { id } = commentObj
        const updatedCommentsArray = comments.filter((comment) => comment.id !== id);
        setComments(updatedCommentsArray);
    } 

    const aUser =
        users.map((eachUser) => {
            return <UserList
                key={eachUser.id}
                onAddComment={handleAddComment}
                onDeleteComment={handleDeleteComment}
                comments={comments}
                acquisitions={acquisitions}
                eachUser={eachUser}
                cUId={currentUser.id}
                onAcquireArtwork={onAcquireArtwork}
                />
        }
        )
        
    return (
        <div >
            {aUser}
        </div>
    );
}
export default UserPage;


