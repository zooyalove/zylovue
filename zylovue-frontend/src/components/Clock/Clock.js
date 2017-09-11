import React, { Component } from 'react';
import styles from './Clock.scss';
import classNames from 'classnames/bind';
import Moment from 'moment';

const cx = classNames.bind(styles);

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerId: null,
            currentTime: new Moment().format('YYYY/MM/DD HH:mm:ss')
        };
        this.calculateCurrentTime = this.calculateCurrentTime.bind(this);
    }
    
    componentDidMount() {
        const { calculateCurrentTime } = this;
        this.setState({
            timerId: setInterval(calculateCurrentTime, 1000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
        
        this.setState({
            timerId: null
        });
    }

    calculateCurrentTime()  {
        this.setState({
            currentTime: new Moment().format('YYYY/MM/DD HH:mm:ss')
        });
    }

    render() {
        const { currentTime } = this.state;

        return (
            <div className={cx('clock')}>
                {currentTime}
            </div>
        );
    }
}

export default Clock;