import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({
    color,
    disabled,
    flat,
    invert,
    style,
    className,
    children,
    ...rest
}) => {
    return (
        <div className={
            cx('button', {
                flat,
                invert,
                disabled
                }, color, className)}
            style={{...style}}
            {...rest}>
            {children}
        </div>
    );
};

export default Button;