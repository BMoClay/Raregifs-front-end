import React from 'react'
import UserAcquisitionCard from './UserAcquisitionCard'

function UserList({ userCollection, eachUser, currentUser, onAcquireArtwork }){

   let userCard =
        userCollection.map((acquisition) => {
        return <UserAcquisitionCard
                    key={acquisition.id}
                    acquisition={acquisition}
                    currentUser={currentUser} 
                    onAcquireArtwork={onAcquireArtwork}
                />
        })

    return(
        <div>
            <h4>The {eachUser.name} Collection</h4>
                {userCard}
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