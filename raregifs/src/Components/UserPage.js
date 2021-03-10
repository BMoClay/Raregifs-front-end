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
         <div>
            {aUser}
         </div>
        </Container>
    );
}
export default UserPage;



// <div>
// <br></br>
// {tCollection.length > 0 ? (
//     <>
//     <h3>{eachUser.name}'s Collection</h3>
//     <Grid>
//         <Grid.Column>
//             <Grid 
//                 columns={2} 
//                 doubling 
//                 stackable
//                 width={20}
//             >
//                 <Grid.Column>
//                     <Segment>{uAcquisitions}</Segment>
//                 </Grid.Column>
//                 <Grid.Column>
//                     <Segment><CommentForm 
//                             eachUserID={eachUser.id} 
//                             cUId={cUId} 
//                             onAddComment={onAddComment}
//                             />
//                     </Segment>
//                 </Grid.Column>
//             </Grid>
//         </Grid.Column>
//     </Grid>
//     </>
//     ) : (
//     <>
//     </>
// )}
// <div>
// {tComments.length > 0 ? (
//     <>
//     <br></br>
//     <h3>Comments</h3>
//     <Grid>
//         <Grid.Column>
//             <Grid columns={2} doubling stackable>
//                 <Grid.Column>
//                     <Segment>{uComments}</Segment>
//                 </Grid.Column>
//             </Grid>
//         </Grid.Column>
//     </Grid>
//     </>
// ) : (
//     <>
//     </>
// )}
// </div>
// </div>