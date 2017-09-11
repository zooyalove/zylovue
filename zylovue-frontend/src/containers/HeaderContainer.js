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
                <CloseButton />
            </HeaderBar>
        );
    }
}

export default HeaderContainer;