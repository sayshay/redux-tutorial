import React, {Component} from 'react'


export class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }


    render() {

        return (
            <div className='main-page'>
                <button onClick={ this.props.changeUsername }>Change Name</button>
            </div>
        )
    }
}