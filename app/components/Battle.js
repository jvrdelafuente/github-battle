import React from 'react'
import {FaUserFriends, FaFighterJet, FaTrophy} from 'react-icons/fa'
import PropsTypes from 'prop-types'

function Intructions(){
    return (
        <div className='instructions-container'>
        <h1 className='center-text header-lg'>
          Instructions
        </h1>
        <ol className='container-sm grid center-text battle-instructions'>
          <li>
            <h3 className='header-sm'>Enter two Github users</h3>
            <FaUserFriends className='bg-light' color='rgb(255, 191, 116)' size={140} />
          </li>
          <li>
            <h3 className='header-sm'>Battle</h3>
            <FaFighterJet className='bg-light' color='#727272' size={140} />
          </li>
          <li>
            <h3 className='header-sm'>See the winners</h3>
            <FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140} />
          </li>
        </ol>
      </div>
    )
}

class PlayerInput extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            userName: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()

        this.props.onSubmit(this.state.userName)
    }
    handleChange(event){
        this.setState({
            userName: event.target.value
        })
    }
    render(){
        return(
            <form className="colunm player" onSubmit={this.handleSubmit}>
                <label htmlFor='username' className='player-label'>
                    {this.props.label}
                </label>
                <div className="row players-inputs">
                    <input 
                        type='text'
                        id='username'
                        className='input-light'
                        placeholder='github username'
                        autoComplete='off'
                        value={this.state.userName}
                        onChange={this.handleChange}
                    />

                    <button className="btn dark-btn" type='submit' disabled={!this.state.userName}>
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    onSubmit: PropsTypes.func.isRequired,
    label: PropsTypes.string.isRequired
}


export default class Battle extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            playerOne: null,
            playerTwo: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(prop, username){
        this.setState({
            [prop]: username
        })
    }
    render(){
        const {playerOne, playerTwo} = this.state;
        return (
            <React.Fragment>
                <Intructions/>
                <div className='players-container'>
                    <h1 className='center-text header-lg'>Players</h1>
                    <div className='row space-around'>
                        {playerOne === null && (
                        <PlayerInput
                            label='Player One'
                            onSubmit={(player) => this.handleSubmit('playerOne', player)}
                        />
                        )}

                        {playerTwo === null && (
                        <PlayerInput
                            label='Player Two'
                            onSubmit={(player) => this.handleSubmit('playerTwo', player)}
                        />
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}