import React from 'react';
import styles from './ViewMode.scss';
import classNames from 'classnames/bind';
import FontAwesome from 'react-fontawesome';
import { Button } from 'components';

const cx = classNames.bind(styles);

const ViewMode = () => {
    return (
        <div className={cx('view_mode')}>
            <FontAwesome name='tv' className={cx('vm_icon')} />
            <div className={cx('vm_container')}>
                <Button flat color="white" title="4분할화면">
                    <FontAwesome name='th-large'/>
                </Button>
                <Button flat color="white" title="9분할화면">
                    <FontAwesome name='th'/>
                </Button>
            </div>
        </div>
    );
};

export default ViewMode;