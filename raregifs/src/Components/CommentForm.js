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
        <Form onSubmit={handleSubmitNewComment}>
            <Form.TextArea 
                label='write a note' 
                placeholder='your note...'
                value={content}
                type='text'
                onChange={(e) => setContent(e.target.value)}
                />
            <Form.Button>send</Form.Button>
        </Form>
    );
}

export default CommentForm



    // <div className="comment-form">
    // <form onSubmit={handleSubmitNewComment}>
    //     <input 
    //         type="text"
    //         title="comment"
    //         placeholder="add comment"
    //         value={content}
    //         onChange={(e) => setContent(e.target.value)}
    //     />
    //     <button type="submit">submit</button>
    // </form>
    // </div>