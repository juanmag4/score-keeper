import React from "react";
import { Players } from "../api/players";
import PropsTypes from "prop-types";

export class Player extends React.Component {
    render() {
        return(
            <div className="item">
                <p>
                {this.props.player.name} has {this.props.player.score} point(s).
                </p>
                <button onClick={() => {
                    Players.update({_id: this.props.player._id}, {$inc: {score: 1}});
                }}>+1</button>
                <button onClick={() => {
                    Players.update({_id: this.props.player._id}, {$inc: {score: -1}});
                }}>-1</button>
                <button onClick={() => {
                    Players.remove({_id: this.props.player._id});
                }}>X</button>
            </div>
        );
    };
};

Player.propTypes = {
    player: PropsTypes.object.isRequired
}