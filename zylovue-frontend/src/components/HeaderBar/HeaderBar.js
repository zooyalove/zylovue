import React from 'react';
import styles from './HeaderBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HeaderBar = ({children}) => {
    return (
        <header className={cx('header')}>
            {children}
        </header>
    );
};

export default HeaderBar;