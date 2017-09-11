import React from 'react';
import styles from './ViewMode.scss';
import classNames from 'classnames/bind';
import FontAwesome from 'react-fontawesome';

const cx = classNames.bind(styles);

const ViewMode = () => {
    return (
        <div className={cx('view_mode')}>
            <FontAwesome name='desktop' className={cx('vm_icon')} />
        </div>
    );
};

export default ViewMode;