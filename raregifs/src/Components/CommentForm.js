import React, { useState } from 'react'

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
        <div className="comment-form">
            <form onSubmit={handleSubmitNewComment}>
                <input 
                    type="text"
                    title="comment"
                    placeholder="add comment"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );

}

export default CommentForm