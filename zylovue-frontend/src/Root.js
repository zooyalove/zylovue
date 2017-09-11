import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { App } from 'containers';

const Root = () => {

    return (
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    );
};

export default Root;