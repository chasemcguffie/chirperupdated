import React, { Component } from 'react';
import Chirp from './Chirp'
import './styles.css'

class App extends Component {
    state = {
        numChildren: 0,
        chirpText: '',
        chirps: [
        {
            id: 1351,
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            username: 'tony',
            avatar: 'https://avatarfiles.alphacoders.com/699/69905.png',
        },
        {
            id: 1501,
            text: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
            username: 'john',
            avatar: 'https://files.slack.com/files-pri/T5QB8JC78-F91UJ34KB/asdf.png',
        },
        {
            id: 1520,
            text: 'it to make a type specimen book. It has survived not only five centuries',
            username: 'jennifer',
            avatar: 'http://i0.kym-cdn.com/photos/images/original/001/287/960/174.jpg',
        },
        ],
        newChirps: []
    }
    onInputChange = (value) => {
        console.log(this.state.newChirps)
        this.setState({ chirpText: value });
    }
    onButtonClick = () => {
        this.setState({
            newChirps: [{
                id: 1520,
                text: this.state.chirpText,
                username: 'gothman',
                avatar: 'http://i0.kym-cdn.com/photos/images/original/001/287/960/174.jpg',
            },
            ...this.state.newChirps],
        })
        return (
            <Chirp list={this.state.chirps[3]} />
        )
    }
    newChirp = () => {
        if (this.state.isChirped === true) {
        return(
            <Chirp text={this.state.text} username="me"/>
        )
        }
    }
    componentDidMount = () => {
        this.setState({isChirped: false})
    }
    render () {
        const chirps = this.state.chirps.map( (chirp) => {
            return (
                <div className='chirp border-light'>
                    <div>
                        <div>
                        <span className="font-weight-bold">{chirp.username}</span>
                        <span> @{chirp.username} </span>
                        </div>
                        <p Style>
                             {chirp.text} 
                        </p>
                    </div>
                </div>
            )
        })
        const newChirps = this.state.newChirps.map ( (chirp) => {
            return (

                    <div className='chirp'>
                        <div>
                            <span className='font-weight-bold'>Guest </span>
                            <span>@guest</span>
                        </div>
                    <p> {chirp.text} </p>
                    </div>
            )
        })
        return (
            <div className='background'>
                <div className='site-body'>
                    <textarea placeholder='Write a new chirp' className='chirp-box'
                        onChange = { (event) => this.onInputChange(event.target.value)}
                    ></textarea>
                    <button className='btn btn-primary chirp-button'
                        onClick = { (event) => this.onButtonClick()}>Chirp
                    </button>
                    { newChirps }
                    { chirps }
                </div>
            </div>
        )
    }
}

export default App;