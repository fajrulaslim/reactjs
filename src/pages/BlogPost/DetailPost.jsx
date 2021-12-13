import React, { Component } from 'react'
import axios from 'axios'

export class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: '',
        }
    }
    componentDidMount() {
        // console.log(this.props.match.params.postID)
        let id = this.props.match.params.postID;
        axios.get(`http://localhost:3004/posts/${id}`)
        .then( res => {
            let post = res.data
            this.setState({
                post: {
                    title: post.title,
                    body: post.body
                }
            })
        })
    }
    render() {
        return (
            <div>
                <p>Detail Post</p>
                <hr />
                <p>{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost
