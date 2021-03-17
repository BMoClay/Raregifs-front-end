import React from 'react'
import { Card, Button } from 'semantic-ui-react'

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
        // <Card.Group >
            <Card
            style={{
                display: 'flex',
                width: '250px',
                // height: '300px',
                justifyContent:'center',
                // padding: '10px',
            }}
            >
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
        // </Card.Group>
    )
}

export default CommentCard