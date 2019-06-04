import React from 'react';

import './PostContainer.scss';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props){
    return(
        <div className='PostContainer'>
            <div className='PostHeader'>
                <img src={props.postProp.thumbnailUrl}/>
                <h3>{props.postProp.username}</h3>
            </div>
            <img src={props.postProp.imageUrl}/>
            <h3>{props.postProp.likes} likes</h3>
            {/* <CommentSection /> */}
        </div>
    )
}

export default PostContainer;