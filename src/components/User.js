import React, {Component} from 'react'





export class User extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {

        return (
            <div className='user-page'>
                Name: {this.props.username}
            </div>
        )
    }
}

