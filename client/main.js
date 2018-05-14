import React from 'react';
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Players } from "../imports/api/players";
import { Tracker } from "meteor/tracker";
import { App } from "../imports/ui/App";

Meteor.startup(() => {
    Tracker.autorun(() => {
        const PLAYERS = Players.find({}, {
            sort: {
                score: -1
            }
        }).fetch()
        let title = "Score Keep"
        ReactDOM.render(<App title={title} players={PLAYERS}/>, document.getElementById('app'));
    });
});