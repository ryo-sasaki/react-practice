import React from 'react';
import './CommentList.css';

const CommentList = (props) => {
    const {comments} = props;
    const commentList = comments.map((comment, index) => {
        return (
            <li key={index} className="Comment-List-item">{comment}</li>
        );
    });

    return (
        <div>
            <ul>{commentList}</ul>
        </div>
    );
};

export default CommentList;