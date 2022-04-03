import React, {Component} from 'react';
import './styles.css'
class Chirp extends Component {
    constructor (props) {
        super()
        this.state = ( {text: '', active: "fa fa-heart-o" });
    }
    toggleClass() {
        this.setState({ active: "fa fa-heart text-danger" });
    }
    
    render () {
        return (
        <div className='chirp'>
            <div>
            <div>
            <span className="font-weight-bold">{this.props.list.username}</span>
            <span> @{this.props.list.username} </span>
            </div>
            <p> {this.props.list.text} </p>
            </div>
            <hr />
        </div>
        )
    }
}
export default Chirp;