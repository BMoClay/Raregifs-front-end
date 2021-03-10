import React from 'react'
import UserAcquisitionCard from './UserAcquisitionCard'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'
import { 
    Container,
    Card,
    Divider, 
    Grid,
    Header,
    Menu,
    Message,
    Segment,
    Table,
} from 'semantic-ui-react'

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
    eachUser.comments_received ? (comments.filter((comment) => comment.commentee_id === eachUser.id)
    ) : (null)

    const uComments =
    eachUser.comments_received ? (tComments.map((comment) => {
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
            <br></br>
            {tCollection.length > 0 ? (
                <>
                <h3>{eachUser.name}'s Collection</h3>
                <Grid>
                    <Grid.Column>
                        <Grid columns={2} doubling stackable>
                            <Grid.Column>
                                <Segment>{uAcquisitions}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment><CommentForm 
                                        eachUserID={eachUser.id} 
                                        cUId={cUId} 
                                        onAddComment={onAddComment}
                                        />
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>
                </>
                ) : (
                <>
                </>
            )}
            <div>
            {tComments.length > 0 ? (
                <>
                <br></br>
                <h3>Comments</h3>
                <Grid>
                    <Grid.Column>
                        <Grid columns={2} doubling stackable>
                            <Grid.Column>
                                <Segment>{uComments}</Segment>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>
                </>
            ) : (
                <>
                </>
            )}
        </div>
    </div>
    );
}

export default UserList;





      //  {/* {/* // return(
        //     <Grid>
        //          {tCollection.length > 0 ? ( */}
        //{/* //             <>  
        //                 <br></br>
        //                 <h2>The {eachUser.name} Collection</h2>
        //                     {uAcquisitions}
        //                 <CommentForm  */}
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















        // return(
        //     <div>
        //          {tCollection.length > 0 ? (
        //             <>
        //                 <h2>The {eachUser.name} Collection</h2>
        //                     {uAcquisitions}
        //                 <h3>Comments on {eachUser.name}'s collection</h3>    
        //                     {uComments}
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
        //     </div>
        // ); */}