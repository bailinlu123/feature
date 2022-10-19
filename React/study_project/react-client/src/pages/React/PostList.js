import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(respose => {
            console.log(respose)
            this.setState({posts: respose.data})
        })
        .catch(error => {
            console.error(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }

    render() {
        const {posts, errorMsg} = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length>0 ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                {
                    errorMsg && 
                    <div>{this.state.errorMsg}</div>
                }
            </div>
        )
    }
}

export default PostList
