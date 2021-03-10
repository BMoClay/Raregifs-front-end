import React from 'react'
import UserAcquisitionCard from './UserAcquisitionCard'
import CommentForm from './CommentForm'
// import CommentContainer from './CommentContainer'
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
            // return <CommentContainer
                    key={comment.id}
                    // comments={comments}
                    // eachUser={eachUser}
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
        <Container className='user-container'>
            <br></br>
        <Header 
            inverted 
            textAlign='center'
            justifyContent='space-around'
            style={{
                padding: '20px'
            }}
        >
            <br></br>
            The {eachUser.name} Collection
        </Header>
            <Grid >
                 <style>
                    {`
                    html, body {
                        background-color: #252839 !important;
                    }

                    p {
                        align-content: center;
                        background-color: #495285;
                        color: #fff;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        min-height: 6em;
                    }

                    p > span {
                        opacity: 0.4;
                        text-align: center;
                    }
                    
                    }
                    `}
                    </style>
                 {tCollection.length > 0 ? (
                    //  <Grid.Column >
                     <>  
                        <br></br>
                        {/* <Header inverted textAlign='center'>The {eachUser.name} Collection</Header> */}
                            {uAcquisitions}
                        <CommentForm 
                            eachUserID={eachUser.id} 
                            cUId={cUId} 
                            onAddComment={onAddComment}
                        />
                        <br></br>
                    </>
                    //{/* </Grid.Column> */}
            ) : (
                <>
                </>
            )}
            {/* <div> */}
                {tComments.length > 0 ? (
                    <Container>
                        <Header
                                inverted 
                                textAlign='center'
                                justifyContent='space-around'
                                style={{
                                    padding: '20px'
                                }}
                            >
                                Comments on {eachUser.name}'s collection
                            </Header>
                        <Grid>
                        <>
                            {/* <Header.Subheader
                                inverted 
                                textAlign='center'
                                justifyContent='space-around'
                            > */}
                                {uComments}
                            {/* </Header.Subheader> */}
                        </>
                        {/* </Grid.Column> */}
                        </Grid>
                    </Container>
                ) : (
                    <>
                    </>
                )}
            {/* </div> */}
            {/* </Grid.Column> */}
        </Grid>
        </Container>
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