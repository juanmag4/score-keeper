import React from "react";
import TitleBar from "./TitleBar";
import { AddPlayer } from "./AddPlayer";
import { PlayerList } from "./PlayerList";

export class App extends React.Component {    
    
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subTitle="Design by me"/>
                <AddPlayer/>
                <PlayerList players={this.props.players}/>
            </div>
        );
    }
}