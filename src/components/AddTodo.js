import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({ title: '' })
    }

    render() {

        return (

            <form style={{ display: 'flex', margin: 10 }} onSubmit={this.onSubmit} >
                <input
                    style={{ flex: '20' }}
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    placeholder="Add Todo Item Here ..."

                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form >

        )
    }
}
