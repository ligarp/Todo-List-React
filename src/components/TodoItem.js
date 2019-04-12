import React, { Component } from 'react'

export default class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <input type='checkbox' checked={completed ? true : false}
                    onChange={this.props.markComplete.bind(this, id)}
                /> {' '}
                {title}
            </div>
        )
    }
}


