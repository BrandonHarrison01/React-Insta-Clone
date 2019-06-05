import React from 'react';

import './CommentSection.scss'

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
                <p><strong>{comment.username}</strong> {comment.text}</p>
                )})}

                <form onSubmit={this.addNewComment}>
                    <input 
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