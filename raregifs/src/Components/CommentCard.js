import React from 'react'

function CommentCard({ content }){
    // let { content } = comment
    console.log(content)
    return (
        <div>
            <h4>{content}</h4>
        </div>
        )
}

export default CommentCard