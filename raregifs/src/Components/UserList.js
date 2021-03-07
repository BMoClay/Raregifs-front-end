import React from 'react'
import UserAcquisitionCard from './UserAcquisitionCard'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'

function UserList({ 
            eachUser, 
            cUId, 
            onAcquireArtwork, 
            acquisitions,
            comments,
            onAddComment,
            onDeleteComment, 
        }){
   
    const tCollection = 
    eachUser.acquisitions ? (acquisitions.filter((acquisition) => acquisition.user.id === eachUser.id)
    ) : (null)
    
    const uAcquisitions = 
    eachUser.acquisitions ? (tCollection.map((acquisition) => {
            return <UserAcquisitionCard
                    key={acquisition.id}
                    aArtwork={acquisition.artwork}
                    cUId={cUId}
                    onAcquireArtwork={onAcquireArtwork}
                    />
            })
    ) : (null)
   
    const tComments = 
    eachUser.comments ? (comments.filter((comment) => comment.commentee_id === eachUser.id)
    ) : (null)

    const uComments =
    eachUser.comments ? (tComments.map((comment) => {
            return <CommentCard
                    key={comment.id}
                    cUId={cUId}
                    commentID={comment.id}
                    content={comment.content}
                    author={comment.author}
                    commenter_id={comment.commenter_id}
                    onDeleteComment={onDeleteComment}
                    />
        })
    ) : (null)

    return(
        <div>
             {tCollection.length > 0 ? (
                <>
                    <h2>The {eachUser.name} Collection</h2>
                        {uAcquisitions}
                    <h3>Comments on {eachUser.name}'s collection</h3>    
                        {uComments}
                    <CommentForm 
                        eachUserID={eachUser.id} 
                        cUId={cUId} 
                        onAddComment={onAddComment}
                    />
                    <br></br>
                </>
        ) : (
            <>
            </>
        )}
        </div>
    );
}

export default UserList;

// const collectionComments = comments.filter((comment) => comment.commentee_id === eachUser.id)
//     const thisCollection = acquisitions.filter((acquisition) => acquisition.user.id === eachUser.id)
    
//     const uAcquisitions =    
//         thisCollection.map((acquisition) => {
//             return <UserAcquisitionCard
//                     key={acquisition.id}
//                     aArtwork={acquisition.artwork}
//                     cUId={cUId}
//                     onAcquireArtwork={onAcquireArtwork}
//                     />
//         })
    
//     const uComments =
//         collectionComments.map((comment) => {
//             return <CommentCard
//                     key={comment.id}
//                     cUId={cUId}
//                     commentID={comment.id}
//                     content={comment.content}
//                     author={comment.author}
//                     commenter_id={comment.commenter_id}
//                     onDeleteComment={onDeleteComment}
//                     />
//         })

//     return(
//         <div>
//             <h2>The {eachUser.name} Collection</h2>
//                 {uAcquisitions}
//             <h3>Comments on {eachUser.name}'s collection</h3>    
//                 {uComments}
//             <CommentForm 
//                 eachUserID={eachUser.id} 
//                 cUId={cUId} 
//                 onAddComment={onAddComment}
//             />
//             <br></br>
//         </div>
//     );
// }