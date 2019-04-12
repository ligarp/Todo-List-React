import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div style={headerStyle}>
                <h1>Todo List</h1>
                <Link to="/" style={{ color: '#fff' }}>Home</Link> | <Link to="/about" style={{ color: '#fff' }}>About</Link>
            </div>
        )
    }
}

const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff'
}