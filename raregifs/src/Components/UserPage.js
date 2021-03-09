import React from 'react'
import UserList from './UserList'
import { Container } from 'semantic-ui-react'

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
        <Container >
            {aUser}
        </Container>
    );
}
export default UserPage;


