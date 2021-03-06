import React, { Component } from 'react'

export default class Note extends Component {
    render() {
        return (
            <div className="note" onClick={this.props.deleteMethod}>
                {this.props.text}
            </div>
        )
    }
}

