import React from 'react'
import UserList from './UserList'

function UserPage({ 
            currentUser, 
            onAcquireArtwork, 
            acquisitions,
            users,
            comments,
            onAddComment,
            onDeleteComment
        }){

    const aUser =
        users.map((eachUser) => {
            return <UserList
                key={eachUser.id}
                onAddComment={onAddComment}
                onDeleteComment={onDeleteComment}
                comments={comments}
                acquisitions={acquisitions}
                eachUser={eachUser}
                cUId={currentUser.id}
                onAcquireArtwork={onAcquireArtwork}
                />
        }
        )
        
    return (
        <div style={{margin: '0px 170px 0px 170px'}}>
         {aUser}
        </div>
    );
}
export default UserPage;

