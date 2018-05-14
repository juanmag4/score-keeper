import React from "react";
import { Players } from "../api/players";

export class AddPlayer extends React.Component {

    handleSubmit = (e) => {
        let player = {
            name: e.target.playerName.value, 
            score: 0
        };

        e.preventDefault();
    
        if (player.name) {
            e.target.playerName.value = "";
    
            Players.insert(player);
        }else{
            alert("Escribi el nombre guachin");
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="playerName" placeholder="Player Name"/>
                <button>Add Player</button>
            </form>
        );
    };
}