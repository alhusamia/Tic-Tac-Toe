import React, { Component } from 'react'
import Border2 from './Border2';

export default class Game2 extends Component {
   constructor(props){
       super(props);
       this.state ={
          xIsNext: true,
          stepNumber:0,
          history: [
              {squares:Array(25).fill(null)}
          ] 
       }
   }
   jumpTo(step){
       this.setState({
           stepNumber:step,
           xIsNext: (step%2===0)
       })
   }
   handelClick(i){
       const history = this.state.history.slice(0,this.state.stepNumber+1);
       const current = history[history.length-1];
       const squares = current.squares.slice();
       const winner = calculateWinner(squares);
       if(winner || squares[i]){
           return;
        }
        
       squares[i] = this.state.xIsNext?"X":"O";
       this.setState({
           history:history.concat({
               squares:squares
           }),
           xIsNext: !this.state.xIsNext,
           stepNumber:history.length
       })
   }
    render() {
        const history=this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step,move)=>{
            const desc = move?"Go to #" + move:"Start the Game";
            return(
                <li key={move}>
                    <button className="button" onClick={()=>{this.jumpTo(move)}}>
                        {desc}
                    </button>
                </li>
            )
        });
        let statuse;
        if(winner){
            statuse = "Winner is "+ winner;
        }else{
            statuse = "Next Player is " + (this.state.xIsNext?"X":"O");
        }
        return (
            <div className="grid_5"> 
            <div/>                           
            <div className="game2">
                <div className="game-board">
                    <Border2 onClick={(i)=>this.handelClick(i)} squares={current.squares} />
                </div>               
            </div>
            <div className="game-info2">
                    <div>{statuse}</div><br/>
                    <ul className="ul2">{moves} </ul>
                </div>
                </div>
        )
    }
}

function calculateWinner(squares){
    const lines =[
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24],
        [0,5,10,15,20],
        [1,6,11,16,21],
        [2,7,12,17,22],
        [3,8,13,18,23],
        [4,9,14,19,24],
        [0,6,12,18,24],
        [4,8,12,16,21]
        
    ];

    for(let i=0;i<lines.length;i++){
        const [a,b,c,d,e] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[c] === squares[d] && squares[d] === squares[e]){
            return squares[a];
        }
    }
    return null;
}
