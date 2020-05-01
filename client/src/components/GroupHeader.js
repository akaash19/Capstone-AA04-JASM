import HeaderButton from "./HeaderButton";
import React from 'react';
import {Link} from "react-router-dom";

export default class GroupHeader extends React.Component {
    render() {
        return (
            <header className="Header">
                <div className="ButtonRow">
                    <HeaderButton placeholder='TimeLine' path='/groupview'/>
                    <HeaderButton placeholder='Map View' path='/mapview'/>
                </div>
            </header>
        )
    }
}