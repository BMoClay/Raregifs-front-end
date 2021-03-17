import React, { useState } from 'react'
import { Form, Card } from 'semantic-ui-react'

function CommentForm({ cUId, eachUserID, onAddComment }){

    const [content, setContent] = useState("")

    function handleSubmitNewComment(e) {
        e.preventDefault();
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content,
                commentee_id: eachUserID,
                commenter_id: cUId,
            }),
        })
            .then((res) => res.json())
            .then((newComment) => {
                onAddComment(newComment)
            })
    }

    return(
        <Card
            style={{
                display: 'flex',
                width: '250px',
                height: '300px',
                justifyContent:'center',
                // padding: '10px',
            }}
        >
            <Card.Content>
                <Form 
                    onSubmit={handleSubmitNewComment} 
                    style={{
                        width: '250px',
                        height: '200px',
                        // padding: '10px',
                    }}
                    >
                    <Form.TextArea
                        style={{
                            // justifyContent:'center',
                            width: '220px',
                            height: '220px',
                            // padding: '10px',
                            // alignItems: 'flex-start',
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

