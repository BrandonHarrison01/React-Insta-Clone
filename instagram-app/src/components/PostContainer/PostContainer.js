import React from 'react';

import './PostContainer.scss';
import likecom from './img/likecom.png'

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props){
    return(
        <div className='PostContainer'>
            <div className='PostHeader'>
                <img src={props.postProp.thumbnailUrl}/>
                <h3>{props.postProp.username}</h3>
            </div>
            <img src={props.postProp.imageUrl}/>
            <img src={likecom} className='likecom'/>
            <h3 className='Likes'>{props.postProp.likes} likes</h3>
            {props.postProp.comments.map((comment) => (
            <CommentSection commentProp={comment} />
            ))}
            <input placeHolder="Add a comment..." />
        </div>
    )
}

export default PostContainer;