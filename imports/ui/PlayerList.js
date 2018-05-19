import React from "react";
import FlipMove from "react-flip-move";
import { Player } from "./Player";

export class PlayerList extends React.Component {
    renderPlayer() {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p className="item__message">Add your first player to get started!</p>
                </div>
            );
        } else {
            return this.props.players.map( player => {
                return <Player key={player._id} player={player} />
            });
        }
    }

    render() {
        return (
            <div>
                <FlipMove>
                    {this.renderPlayer()}
                </FlipMove>
            </div>
        );
    }
}