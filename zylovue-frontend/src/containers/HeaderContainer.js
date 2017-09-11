import React, { Component } from 'react';
import {
    HeaderBar,
    Logo,
    Clock,
    ViewMode,
    CloseButton
} from 'components';

class HeaderContainer extends Component {

    render() {
        return (
            <HeaderBar>
                <Logo />
                <Clock />
                <ViewMode />
                {/* <div style={{'border-left':'1px solid gray', 'border-right':'1px solid lightgray'}}></div> */}
                <CloseButton />
            </HeaderBar>
        );
    }
}

export default HeaderContainer;