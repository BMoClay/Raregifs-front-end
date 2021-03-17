import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

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
        <Form 
            onSubmit={handleSubmitNewComment} 
            style={{
                width: '270px',
                height: '200px',
                padding: '10px',
            }}
            >
            <Form.TextArea
                style={{
                    justifyContent:'center',
                    width: '250px',
                    height: '100px',
                    padding: '10px',
                    alignItems: 'flex-start',
                }}
                placeholder='your note...'
                value={content}
                type='text'
                onChange={(e) => setContent(e.target.value)}
                />
            <Form.Button>post</Form.Button>
        </Form>
    );
}

export default CommentForm

