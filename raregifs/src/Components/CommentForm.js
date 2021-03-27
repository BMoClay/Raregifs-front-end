import React, { useState } from 'react';
import axios from 'axios';
import { Form, Card } from 'semantic-ui-react'

function CommentForm({ cUId, eachUserID, onAddComment }){

    const [content, setContent] = useState("")

    function handleSubmitNewComment(e) {
        e.preventDefault();
        axios.post("/comments", {
            content: content,
            commentee_id: eachUserID,
            commenter_id: cUId,
        })
            .then((response) => {
                onAddComment(response.data)
            })
    }

    return(
        <Card
            style={{
                display: 'flex',
                width: '250px',
                height: '300px',
                justifyContent:'center',
            }}
        >
            <Card.Content>
                <Form 
                    onSubmit={handleSubmitNewComment} 
                    style={{
                        width: '250px',
                        height: '200px',
                    }}
                    >
                    <Form.TextArea
                        style={{
                            width: '220px',
                            height: '220px',
                        }}
                        placeholder='your note...'
                        value={content}
                        type='text'
                        onChange={(e) => setContent(e.target.value)}
                        />
                    <Form.Button>post</Form.Button>
                </Form>
            </Card.Content>
        </Card>
    );
}

export default CommentForm

