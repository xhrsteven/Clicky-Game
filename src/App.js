import React, { Component, Fragment } from 'react';
// import Grid from '@material-ui/core/Grid';
import friends from './friends.json'
import NavBar from './component/NavBar';
import FriendCard from './component/FriendCard';
import Title from './component/Title';
import './App.css'
import GridList from '@material-ui/core/GridList';

function shuffleFriends(friend){

    let i = friends.length -1;
    while(i >0){
        const j = Math.floor(Math.random()*(i+1));
        const p = friends[i];
        friends[i] = friends[j];
        friends[j] =p;
        i --;
    }
    return friends
}
class App extends Component {

    state = {
        friends,
        currentScore: 0,
        topScore: 0,
        message: 'Click Picture You like',
        clicked: [],
    }

    handleClick = id => {
        if(this.state.clicked.indexOf(id) === -1 ){
            this.handleIncrement();
            this.setState({clicked : this.state.clicked.concat(id)});
        }else{
            this.handleReset();
        }
    };

    handleIncrement = () =>{
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            message: 'Keep Moving!'
        });
        if(newScore >= this.state.topScore){
            this.setState({topScore: newScore});
        }
        else if (newScore === 12){
            this.setState({message: 'Winner Winner Chicken Dinner!'})
        } 
        this.handleShuffle();
    };

    handleReset = () =>{
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            message: 'Try Again!',
            clicked: [],
        });
        this.handleShuffle();
    };

    handleShuffle = (friend)=>{
        let shuffleFriend = shuffleFriends(friend);
        this.setState({friends: shuffleFriend});
    };

    render() {
        return (
            <Fragment>
                <NavBar
                    currentScore = {this.state.currentScore}
                    topScore = {this.state.topScore}
                    message = {this.state.message}
                />
                <Title>
                    Try to click on each card, but don't hit any twice!
                </Title>
                <GridList item cols={3}>
                    {this.state.friends.map(friend =>(
                            <FriendCard
                                key={friend.id}
                                handleClick= {this.handleClick}
                                handleIncrement={this.handleIncrement}
                                handleReset={this.handleReset}
                                handleShuffle={this.handleShuffle}
                                id={friend.id}
                                image={friend.image}>
                            </FriendCard>
                    ))}
                </GridList>
            </Fragment>
        )
    }
}


export default App; 




