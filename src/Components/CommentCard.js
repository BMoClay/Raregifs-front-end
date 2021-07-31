import React from 'react';
import axios from 'axios';
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
        axios.delete(`/comments/${commentID}`)
            .then(response => {
                onDeleteComment(response.data)
            })
    }
  
    return (
        <Card
            style={{
                display: 'flex',
                width: '250px',
                justifyContent:'center',
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
    )
}

export default CommentCard