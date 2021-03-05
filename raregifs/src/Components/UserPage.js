import React from 'react'
import UserList from './UserList'

function UserPage({ users, currentUser, onAcquireArtwork }){
    
    const aUser =
        users.map((eachUser) => {
            return <UserList
                key={eachUser.id}
                eachUser={eachUser}
                cUId={currentUser.id}
                onAcquireArtwork={onAcquireArtwork}
                />
        }
        )
        console.log(users)
    return (
        <div >
            {aUser}
        </div>
    );
}
export default UserPage;





// const aUser =
//         users ? (users.map((eachUser) => {
//             return <UserList
//                 key={eachUser.id}
//                 eachUser={eachUser}
//                 cUId={currentUser.id}
//                 onAcquireArtwork={onAcquireArtwork}
//                 />
//         }
//         )) : (null)

//     // const currentU =
//     //     currentUser ? ((currentUser) =>{
//     //         return (
//     //             currentUse={currentUser}
//     //             )
//     //     }
//     //     ) : (null)
        
      
//     return (
//         <div >
//             {aUser}
//         </div>
//     );
// }













// function UserPage({ users, currentUser, onAcquireArtwork }){
    
//     const aUser =
//         users && currentUser ? (users.map((eachUser) => {
//             return <UserList
//                 key={eachUser.id}
//                 eachUser={eachUser}
//                 onAcquireArtwork={onAcquireArtwork}
//                 />
//         }
//         )) : (null)
      
//     return (
//         <div >
//             {aUser && currentUser ? (
//                 <>
//                 {aUser}
//                 {currentUser}
//                 </>
//             ) : (null)
//             }
//         </div>
//     );
// }
// export default UserPage;