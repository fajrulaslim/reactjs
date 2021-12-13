import React, { Component } from 'react'
import Post from '../../component/Post/Post'
import './BlogPost.css'
import axios from 'axios'
import API from '../../services'

class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    }
    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({ 
                post: result
            })
        })
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
        // axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        // .then((res) => {
        //     // console.log(res.data)
        //     this.setState({ 
        //         post: res.data
        //     })
        // })
    }
    postDataAPI = () => {
        API.postNewsBlog(this.state.formBlogPost)
        .then(result => {
            this.getPostAPI()
        })
        // axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        // .then((res) => {
        //     this.getPostAPI()
        // }, (err) => {
        //     console.log('error: ', err)
        // })
    }
    putDataAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id)
        .then(result => {
            this.getPostAPI()
        })
        // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
        // .then((res) => {
        //     this.getPostAPI()
        // })
    }
    handleRemove = (id) => {
        API.deletePost(id)
        .then(result => {
            this.getPostAPI()
        })
        // axios.delete(`http://localhost:3004/posts/${id}`)
        // .then((res) => {
        //     console.log(res)
        //     this.getPostAPI()
        // })
    }
    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }
    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost}
        let timeStamp = new Date().getTime()
        if(!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp
        }         
        formBlogPostNew[event.target.name] = event.target.value
        let title = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }) 
    }
    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.putDataAPI()
        } else {
            this.postDataAPI()
        }
        this.setState({
            isUpdate: false,
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            }, 
        })
    }
    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount() {
        // Fetch
        // fetch('http://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        // Axios
        this.getPostAPI()
    }

    render() {
        return (
            <>
                <p className="section-title">Blog Post Aslim</p>
                
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="Add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder="Add body content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name}</p>
                    })
                } */}
            </>
        )
    }
}

export default BlogPost
