import React from 'react'
import UserAcquisitionCard from './UserAcquisitionCard'
// import CommentsContainer from './CommentsContainer'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'

function UserList({ commentsReceived, userCollection, eachUser, currentUser, onAcquireArtwork }){
    
   let userCard =
        userCollection.map((acquisition) => {
        return <UserAcquisitionCard
                    key={acquisition.id}
                    acquisition={acquisition}
                    currentUser={currentUser} 
                    onAcquireArtwork={onAcquireArtwork}
                />
        })

    let userComments =
        commentsReceived.map((comment) => {
        return <CommentCard
                    key={comment.id}
                    content={comment.content}
                />
        })

    return(
        <div>
            <h4>The {eachUser.name} Collection</h4>
                {userCard}
            <h4>Comments on {eachUser.name}' collection</h4>    
                {userComments}
            <h4>Add a comment</h4>
                <CommentForm currentUser={currentUser}/>
                <br></br>
        </div>
    );
}

export default UserList;



// const userAcquisitions =
// users.map((user) => {
//         return <AcquisitionCard
//         // acquisition={acquisition}
//         key={user.id}
//         userCollection={user.acquisitions}
//         user={user}
//         currentUser={currentUser} 
//         onAcquireArtwork={onAcquireArtwork}
//         // userAcquisition={userAcquisition}
//         />
//         user.acquisitions.map((userAcquisition) => {
//             return console.log(userAcquisition)
//         })
// })


// let userCard =
// users.map((user) => {
//     return (
//         <div>
//             <h4>{user.name}</h4>
//             <AcquisitionCard
//         key={user.id}
//         user={user}
//         userAcquisition={user.acquisitions.map((acquisition) => 
//             acquisition={acquisition}
//             )}
//         currentUser={currentUser} 
//         onAcquireArtwork={onAcquireArtwork}
//         />
//         </div>
//     )
// }) 









 // const [eachUser, setEachUser] = useState([])
    // const [users, setUsers] = useState([])
    // // need to run a loop on users to get each user
    // // need to run a loop on each user to get each acquisition
    // useEffect(() => {
    //     fetch('http://localhost:3000/users')
    //         .then(r => r.json())
    //         .then(usersArray => {
    //             setUsers(usersArray);
    //         })
    //   }, [])

    // const userAcquisitionCard =
   
    //     users.map((userAcquisition) => {
    //     return <AcquisitionCard
    //         key={eachUser.id}
    //         userAcquisition={userAcquisition}
    //         eachUser={eachUser}
    //         currentUser={currentUser} 
    //         onAcquireArtwork={onAcquireArtwork}
    //         />
    // })