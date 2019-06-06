import React from 'react';

import styled from 'styled-components';
import './PostContainer.scss';
import likecom from './img/likecom.png'

import UserName from '../Styles/Reusables';
import CommentSection from '../CommentSection/CommentSection';

const NewPost = styled.div`
    width: 640px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 50px auto;

    &:hover{
        width: 800px;
        box-shadow: 20px 30px 40px grey;
    }
`

const ProfilePic = styled.img`
    width: 40px;
    border-radius: 100px;
    margin: 20px;

    &:hover{
        width: 60px;
        border-radius: 5px;
        margin: 10px;
    }
`

class PostContainer extends React.Component {

    render () {
        return(
            <div>
                {this.props.filteredPosts.length === 0 ? this.props.postProp.map((post) => {
                    return (
                        <NewPost className='PostContainer' >
                            <div className='PostHeader'>
                                <ProfilePic src={post.thumbnailUrl} />
                                <UserName >{post.username}</UserName >
                            </div>
                            <img className='Post' src={post.imageUrl} />
                            <img onClick={this.props.handleClick} src={likecom} className='likecom' />
                            <h3 className='Likes'>{post.likes} likes</h3>
                            <CommentSection comments={post.comments} />
                            {/* <p>{props.postProp.timestamp}</p> */}
                        </NewPost>
                    )
            }) : this.props.filteredPosts.map((post) => {
                return (
                    <NewPost className='PostContainer' >
                        <div className='PostHeader'>
                            <ProfilePic src={post.thumbnailUrl} />
                            <h3>{post.username}</h3>
                        </div>
                        <img src={post.imageUrl} />
                        <img onClick={this.props.handleClick} src={likecom} className='likecom' />
                        <h3 className='Likes'>{post.likes} likes</h3>
                        <CommentSection comments={post.comments} />
                        {/* <p>{props.postProp.timestamp}</p> */}
                    </NewPost>
                )
            })
            }
            </div>
        )
    }
}

export default PostContainer;