import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
import friends from './friends.json'
import NavBar from './component/NavBar';
import Wrapper from './component/Wrapper';
import FriendCard from './component/FriendCard';
import Title from './component/Title';
import './App.css'



function shuffleFriends(array) {
    for(let i=array.length -1 ; i>0 ;i++){
        let j=Math.floor(Math.random()*(i+1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}


class App extends Component {
    

    state = {
        friends,
        currentScore : 0,
        topScore: 0,
        Message: '',
        clicked: false,
    }

    handleClick = () =>{
        if(this.state.clicked === false){
            this.handleIncrement();
            this.setState({clicked : true});
        }else{
            this.handleReset();
        }
    };

    handleIncrement = () =>{
        const newScore = this.state.currentScore +1;
        this.setState({
            currentScore: newScore,
            Message: 'Keep Moving!'
        });
        if(newScore >= this.state.topScore){
            this.setState({topScore: newScore});
        }
        else if (newScore === 12){
            this.setState({Message: 'Winner Winner Chicken Dinner!'})
        } 
    };

    handleReset = () =>{
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            Message: 'Try Again!',
            clicked: false,
        });
        this.handleShuffle();
    };

    handleShuffle = ()=>{
        let shuffleFriend = shuffleFriends(friends);
        this.setState({friends: shuffleFriend});
    };

    render() {
        return (
            <Wrapper>
                <NavBar
                    Title = 'SpongeBob Friends Click Game'
                    score = {this.state.currentScore}
                    topScore = {this.state.topScore}
                    Message = {this.state.Message}
                />
                <Title>
                    Try to click on each card, but don't hit any twice!
                </Title>
                
                    {this.state.friends.map(friend =>(
                        // <Grid item xs={3}>
                            <FriendCard
                                key={friend.id}
                                handleClick= {this.handleClick}
                                handleIncrement={this.handleIncrement}
                                handleReset={this.handleReset}
                                handleShuffle={this.handleShuffle}
                                id={friend.id}
                                image={friend.image}>
                            </FriendCard>
                        // </Grid>
                    ))}
                
            </Wrapper>
        )
    }
}


export default App; 




