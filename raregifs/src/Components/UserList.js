import React, { useState } from 'react'
import UserAcquisitionCard from './UserAcquisitionCard'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'

function UserList({ eachUser, cUId, onAcquireArtwork, acquisitions }){

                                        // eachUser.comments_received
    const [comments, setComments] = useState([])

    function handleAddComment(newComment) {
        const updatedCommentsArray = [newComment, ...comments];
        setComments(updatedCommentsArray)
    } 

    function handleDeleteComment(id) {
        const updatedCommentsArray = comments.filter((comment) => comment.id !== id);
        setComments(updatedCommentsArray);
    } 

    const thisCollection = acquisitions.filter((acquisition) => acquisition.user.id === eachUser.id)
    
    const uAcquisitions =    
        thisCollection.map((acquisition) => {
            return <UserAcquisitionCard
                    key={acquisition.id}
                    aArtwork={acquisition.artwork}
                    cUId={cUId}
                    onAcquireArtwork={onAcquireArtwork}
                    />
        })
    
    const uComments =
        eachUser.comments_received.map((rComment) => {
            return <CommentCard
                    key={rComment.id}
                    cUId={cUId}
                    commentID={rComment.id}
                    content={rComment.content}
                    author={rComment.author}
                    commenter_id={rComment.commenter_id}
                    onDeleteComment={handleDeleteComment}
                    />
        })

    return(
        <div>
            <h2>The {eachUser.name} Collection</h2>
                {uAcquisitions}
            <h3>Comments on {eachUser.name}'s collection</h3>    
                {uComments}
                <CommentForm 
                    eachUserID={eachUser.id} 
                    cUId={cUId}
                    onAddComment={handleAddComment}
                    />
                <br></br>
        </div>
    );
}

export default UserList;







// const [comments, setComments] = useState([])

// function handleAddComment(newComment) {
//     const updatedCommentsArray = [newComment, ...comments];
//     setComments(updatedCommentsArray)
// } 

// function handleDeleteComment(id) {
//     const updatedCommentsArray = comments.filter((comment) => comment.id !== id);
//     setComments(updatedCommentsArray);
// } 

// const uAcquisitions =
//     eachUser.acquisitions ? (eachUser.acquisitions.map((acquisition) => {
//         return <UserAcquisitionCard
//                     key={acquisition.id}
//                     aArtwork={acquisition.artwork}
//                     cUId={cUId}
//                     onAcquireArtwork={onAcquireArtwork}
//                 />
//     }
//     )) : (null)


// const uComments =
//     eachUser.comments_received ? (eachUser.comments_received.map((rComment) => {
//             return <CommentCard
//                         key={rComment.id}
//                         cUId={cUId}
//                         commentID={rComment.id}
//                         content={rComment.content}
//                         author={rComment.author}
//                         commenter_id={rComment.commenter_id}
//                         onDeleteComment={handleDeleteComment}
//                     />
//         }
//     )) : (null)

// return(
//     <div>
//         <h2>The {eachUser.name} Collection</h2>
//             {uAcquisitions}
//         <h3>Comments on {eachUser.name}'s collection</h3>    
//             {uComments}
//             <CommentForm 
//                 eachUserID={eachUser.id} 
//                 cUId={cUId}
//                 onAddComment={handleAddComment}
//                 />
//             <br></br>
//     </div>
// );
// }














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