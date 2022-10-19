import { event } from 'jquery'
import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: '',
        }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    handlerCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handlerTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handlerSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" value={this.state.username} onChange={this.handlerUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="comments">comments</label>
                    <textarea name="" id="te1" cols="30" rows="10" value={this.state.comments} onChange={this.handlerCommentsChange}></textarea>
                </div>
                <div>
                    <label htmlFor="topic">Topic</label>
                    <select name="topic" id="topic" value={this.state.topic} onChange={this.handlerTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button> Submit </button>
            </form>
        )
    }
}

export default Form
