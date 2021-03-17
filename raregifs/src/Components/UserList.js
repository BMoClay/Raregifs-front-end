import React from 'react'
import UserAcquisitionCard from './UserAcquisitionCard'
import CommentForm from './CommentForm'
import CommentCard from './CommentCard'

import { 
    Card,
    Container,
    Divider, 
    Grid,
    Header,
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
        <Container 
            className='user-container'  
            style={{
                flexWrap: 'wrap',
                position: 'relative',
                alignItems: 'center',
                textAlign:'center',
                justifyContent: 'center',
                padding: '10px', 
                }}
            >
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
                <Header 
                    inverted 
                    style={{
                        display: 'flex',
                        textAlign:'center',
                        justifyContent:'space-around',
                        padding: '20px',
                    }}
                >
                    <br></br>
                    The {eachUser.name} Collection
                </Header>
                {/* <Divider hidden style={{ justifyContent: 'space-around'}}/> */}
                    <Grid 
                        style={{
                            // display: 'flex',
                            // flexWrap: 'wrap',
                            // flexDirection: 'row',
                            // textAlign:'center',
                            // justifyContent:'space-around',
                            // alignSelf: 'center',
                        }}
                    >
                        {tCollection.length > 0 ? (
                        <>  
                        <br></br>
                        <Card.Group>
                        {uAcquisitions}
                        <CommentForm 
                            style={{
                                display: 'flex',
                                textAlign:'center',
                                justifyContent:'center',
                                // padding: '10px',
                            }}
                            eachUserID={eachUser.id} 
                            cUId={cUId} 
                            onAddComment={onAddComment}
                        />
                        <br></br>
                        </Card.Group>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                        {/* <Divider hidden /> */}
                        {tComments.length > 0 ? (
                        <Container  
                            style={{
                                textAlign:'center',
                                justifyContent:'space-around',
                                padding: '10px',
                            }}
                        >
                            <Header
                                inverted 
                                style={{
                                    justifyContent: 'space-around',
                                    padding: '20px'
                                }}
                            >
                                Comments on {eachUser.name}'s collection
                            </Header>
                            <Card.Group>
                            {/* <Grid  
                                style={{
                                    padding: '10px',
                                }}
                            > */}
                            <>
                            {uComments}
                            </>
                            {/* </Grid> */}
                            </Card.Group>
                        </Container>
                        ) : (
                            <>
                            </>
                        )}
                </Grid>
        </Container>
    );
}

export default UserList;


    
