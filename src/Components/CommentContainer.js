import React from 'react';
import CommentCard from './CommentCard';
import { Container, Header } from 'semantic-ui-react';

function CommentContainer({
    cUId, 
    commenter_id, 
    content, 
    author, 
    commentID, 
    onDeleteComment,
    eachUser,
    comments, 
}){

    const tComments = 
    eachUser.comments_received ? (comments.filter((comment) => comment.commentee_id === eachUser.id)
    ) : (null)

    const uComments =
    eachUser.comments_received ? (tComments.map((comment) => {
            return <CommentContainer
                    key={comment.id}
                    name={eachUser.name}
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
        <Container>
            <CommentCard
                cUId={cUId}
                commentID={commentID}
                content={content}
                author={author}
                commenter_id={commenter_id}
                onDeleteComment={onDeleteComment}
            />
        </Container>
    )
    
}


export default CommentContainer