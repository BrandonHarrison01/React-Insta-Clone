import React from 'react';

import './PostContainer.scss';
import likecom from './img/likecom.png'

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {

    render () {
        return(
            <div>
                {this.props.filteredPosts.length === 0 ? this.props.postProp.map((post) => {
                    return (
                        <div className='PostContainer'>
                            <div className='PostHeader'>
                                <img src={post.thumbnailUrl} />
                                <h3>{post.username}</h3>
                            </div>
                            <img src={post.imageUrl} />
                            <img src={likecom} className='likecom' />
                            <h3 className='Likes'>{post.likes} likes</h3>
                            <CommentSection comments={post.comments} />
                            {/* <p>{props.postProp.timestamp}</p> */}
                        </div>
                )
            }) : this.props.filteredPosts.map((post) => {
                return (
                    <div className='PostContainer'>
                        <div className='PostHeader'>
                            <img src={post.thumbnailUrl} />
                            <h3>{post.username}</h3>
                        </div>
                        <img src={post.imageUrl} />
                        <img src={likecom} className='likecom' />
                        <h3 className='Likes'>{post.likes} likes</h3>
                        <CommentSection comments={post.comments} />
                        {/* <p>{props.postProp.timestamp}</p> */}
                    </div>
                )
            })
            }
            </div>
        )
    }
}

export default PostContainer;