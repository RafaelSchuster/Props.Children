import React, { Component } from 'react'

export default class ChildComp2 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={this.props.color}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias alias dignissimos nesciunt saepe porro laudantium tenetur. Perferendis mollitia laudantium rerum deleniti quos dicta? Similique beatae non aspernatur veniam tempore?</p>
                <input type="number" name="" id="" />
            </div>
        )
    }
}
