import React from 'react';

import './CommentSection.scss'

function CommentSection(props){
    return (
        <div className='CommentSection'>
            <p><strong>{props.commentProp.username}</strong> {props.commentProp.text}</p>
        </div>
    )
}

export default CommentSection;