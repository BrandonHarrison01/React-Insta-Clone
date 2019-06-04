import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props){
    return(
        <div>
            <div>
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