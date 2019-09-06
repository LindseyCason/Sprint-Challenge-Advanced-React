import React, { Component } from 'react';
import axios from "axios";

class Players extends Component{

    constructor(){
        super();
        this.state={
           players: [],
           key: "",
           name: "",
           country: "",
           searches: ""
        };
      }

      componentDidMount(){
        axios.get("http://localhost:5000/api/players")
        .then(res=>{
            this.setState({ 
            players: res.data});
        })
        .catch(err => {
            console.log(err);
        })
      }
    
    
      render(){

        
      return (
        <div>
          <header>
            <h1>PLAYERS</h1>
              <div>
                  {this.state.players.map(player=>{
                    return (
                    <div>
                        <div className="CardFrame">
                          <div className="PlayerInfo" key={player.id}>                            
                                <div key={player.id}>
                                <h2>{player.name}</h2>
                                <h3>Country: {player.country}</h3>
                                <h3>Searches: {player.searches}</h3>
                            </div>
                          </div>
                        </div>
                    </div>
                    )
                  })}
              </div>
          </header>
        </div>
      );
      }


}

export default Players;  
