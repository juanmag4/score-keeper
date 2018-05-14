import React from "react";
import { Player } from "./Player";

export class PlayerList extends React.Component {
    render() {
        return this.props.players.map(player =>{
            return <Player key={player._id} player={player}/>
        });
    }
}