import React from 'react';
import styles from './CloseButton.scss';
import classNames from 'classnames/bind';
import FontAwesome from 'react-fontawesome';

const cx = classNames.bind(styles);

const CloseButton = ({onClose}) => {
    return (
        <div className={cx('closebtn')} title="Quit" onClick={onClose}>
            <FontAwesome name='sign-out' />
        </div>
    );
};

export default CloseButton;