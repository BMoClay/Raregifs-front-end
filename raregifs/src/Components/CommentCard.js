import React from 'react'

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
            <div>
                <h4>{content}</h4>
                <h4>-{author}</h4>
                {cUId === commenter_id ? (
                        <>
                            <button onClick={handleDeleteCommentClick}>
                                delete comment
                            </button>
                        </>
                    ) : (
                        <>
                        </>
                    )}
            </div>
            )
}

export default CommentCard