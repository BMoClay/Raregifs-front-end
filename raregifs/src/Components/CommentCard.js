import React from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'

function CommentCard({ 
            cUId, 
            commenter_id, 
            content, 
            author, 
            commentID, 
            onDeleteComment 
        }){
          
    function handleDeleteCommentClick() {
        fetch(`http://localhost:3000/comments/${commentID}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deletedComment => {
                onDeleteComment(deletedComment)
            })
    }
  
    return (
        // <Grid>
            <Card.Group >
                <Card>
                    <Card.Content>
                        <Card.Header >{content}</Card.Header>
                        <Card.Description>-{author}</Card.Description>
                        {cUId === commenter_id ? (
                            <>
                                <Button 
                                    onClick={handleDeleteCommentClick}
                                    size="small"
                                    icon="trash"
                                    >
                                </Button>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </Card.Content>
                 </Card>
            </Card.Group>
        // </Grid> 
    )
}

export default CommentCard






{/* <h4>{content}</h4>
<h4>-{author}</h4>
{cUId === commenter_id ? (
        <>
            <button onClick={handleDeleteCommentClick}>
                delete comment
            </button>
        </>
    ) : (
        <>
        </>
    )} */}













// return(
//     <Grid>
//          {tCollection.length > 0 ? (
//             <>  
//                 <br></br>
//                 <h2>The {eachUser.name} Collection</h2>
//                     {uAcquisitions}
//                 <CommentForm 
//                     eachUserID={eachUser.id} 
//                     cUId={cUId} 
//                     onAddComment={onAddComment}
//                 />
//                 <br></br>
//             </>
//     ) : (
//         <>
//         </>
//     )}
//     <div>
//         {tComments.length > 0 ? (
//             <>
//                 <h3>Comments on {eachUser.name}'s collection</h3>    
//                     {uComments}
//             </>
//         ) : (
//             <>
//             </>
//         )}
//     </div>
//     </Grid>
// );













// return (
//     <div className="acquisition-card">
//         <img src={aArtwork.image} alt={aArtwork.title} />
//         <h2>{aArtwork.title}</h2>
//         <h4>{aArtwork.user_name}</h4>
//         <div>
//             {cUId ? (
//                 <>
//                 <button onClick={handleAcquireArtworkClick}>
//                     acquire image
//                 </button>
//                 </>
//             ) : (
//                 <>
//                 </>
//             )}
//         </div>
//         <br></br>
//         <br></br>
//     </div>
// );