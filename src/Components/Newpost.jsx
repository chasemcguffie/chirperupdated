import React, {Component} from 'react';
import App from './App'
import Chirp from './Chirp'


class Newpost extends Component {
    state = {
        text: ''
    }
    onInputChange = (value) => {
        this.setState({ text: value });
    }
    onButtonClick = () => {
        this.setState( {isChirped: true} );
        console.log()
    }
    newChirp = () => {
        if (this.state.isChirped === true) {
        return(
            <Chirp text='hi hi hi' username="me" avatar="https://ae01.alicdn.com/kf/HTB1hE4QQFXXXXXqXVXXq6xXFXXXq/2017-Wall-Sticker-Decal-children-room-Gaming-Gamer-Joystick-Video-Computer-Game-Home-Decor-Wallpaper-Wall.jpg"/>
        )
        }
    }
    render() {
        return(
        <div>
            <input  
            onChange = { (event) => this.onInputChange(event.target.value)}
            ></input>
            <button className='btn btn-primary'
                onClick = { (event) => this.onButtonClick()}>Chirp
            </button>
            {this.newChirp()}
        </div>
        )
    }
}

export default Newpost;