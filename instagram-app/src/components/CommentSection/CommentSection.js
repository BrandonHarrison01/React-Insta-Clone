import React from 'react';

import UserName from '../Styles/Reusables';

import styled from 'styled-components';
import './CommentSection.scss';

const Comments = styled.p`
    border-top: .5px solid #ddd;
    padding: 5px;
    margin: 0;

    &:hover{
        border-left: 1px solid #ddd;
        background-color: #eee;
    }
`

const AddComment = styled.input`
    box-sizing: border-box;
    border: none;
    border-top: 2px solid #ddd;
    width: 100%;
    text-align: start;
    padding: 30px 10px;
    font-size: 1rem;

    &:focus {
        outline: none;
        border-top: 2px solid #bbb;
    }
`

class CommentSection extends React.Component {
    state = {
        comments: this.props.comments,
        newComment: ''
    }

    addNewComment = e => {
        e.preventDefault();
        const newComment = {
            username: 'brandonljsd',
            text: this.state.newComment
        }
        this.setState({comments: [...this.state.comments, newComment], newComment: ''})
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='CommentSection'>
                {this.state.comments.map((comment) => {
                return(
                <Comments><UserName lower>{comment.username}</UserName>: {comment.text}</Comments>
                )})}

                <form onSubmit={this.addNewComment}>
                    <AddComment 
                        type='text' 
                        name='newComment' 
                        value={this.state.newComment} 
                        onChange={this.changeHandler} 
                        placeholder='Add a comment...' 
                    />
                </form>
            </div>
        )
    }
}

export default CommentSection;