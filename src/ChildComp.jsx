import React, { Component } from 'react'

export default class ChildComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={this.props.color}>
                <input type="text" name="" id="" />
                <button>Click</button>

            </div>
        )
    }
}
