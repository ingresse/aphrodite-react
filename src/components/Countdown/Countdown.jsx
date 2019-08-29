/* Core Packages */
import React, { useEffect, useState } from 'react';

/* Utilities */
import { colors } from '../../utils';

/* Component Styles */
import CountdownStyled from './CountdownStyled';

/* Component Constants */
const SELECTOR      = 'aph-countdown';
const LOG_PREFIX    = 'Aphrodite Countdown:';
const RADIUS        = 54;
const VIEW_BOX      = 120;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/* Component Itself */
function Countdown(props) {
    /**
     * Inherit props
     */
    const {
        background,
        className,
        color,
        log,
        size,
        seconds,
        strokeWidth,
        styles,
        onFinishCallback,

        ...rest
    } = props;

    /**
     * Local values
     */
    const [ countdown, setCountdown ]   = useState(seconds);
    const [ dashoffset, setDashoffset ] = useState(0);
    const [ timer, setTimer ]           = useState(null);

    /**
     * Handle with countdown progress
     *
     * @param {number} value
     */
    function handleProgress(value) {
        const _progress = value / 100;
        const _dashoffset = CIRCUMFERENCE * (1 - _progress);

        setDashoffset(_dashoffset);
        console.log(
            'countdown:',
            value + '%',
            '|',
            'offset:',
            _dashoffset + ';'
        );
    }

    /**
     * Handle with Start
     */
    function handleStart() {
        let _timer        = null;
        let _count        = 0;
        let _current      = seconds;
        let _progress     = (_current / seconds) * 100;
        const miliseconds = 1000;

        if (log) {
            console.log(LOG_PREFIX, seconds, 'seconds to decrease;');
        }

        function _decrease() {
            if (_count > seconds) {
                if (typeof onFinishCallback === 'function') {
                    onFinishCallback(seconds, log);
                }
                return clearInterval(_timer);
            }

            handleProgress(_progress);
            setCountdown(seconds - _count);

            _count = _count + 1;
            _current = _current - 1;
            _progress = (_current / seconds) * 100;
        }

        clearInterval(timer);
        clearInterval(_timer);

        _decrease();

        _timer = setInterval(_decrease, miliseconds);

        setTimer(timer);
    }

    /**
     * Did Mount
     */
    useEffect(() => {
        handleStart();

        return () => {
            clearInterval(timer);
        };
    }, [ seconds ]);

    /**
     * Render
     */
    return (
        <CountdownStyled
            {...rest}
            aphBackground={background}
            aphColor={color}
            aphSelector={SELECTOR}
            aphSize={size}
            aphStyles={styles}
            className={`${SELECTOR}-wrapper ${className || ''}`}>
            <svg
                className={`${SELECTOR} ${className || ''}`}
                width={size}
                height={size}
                viewBox={`0 0 ${VIEW_BOX} ${VIEW_BOX}`}>
                <circle
                    className={`${SELECTOR}__trace`}
                    cx={(VIEW_BOX / 2)}
                    cy={(VIEW_BOX / 2)}
                    r={RADIUS}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className={`${SELECTOR}__line`}
                    cx={VIEW_BOX / 2}
                    cy={VIEW_BOX / 2}
                    r={RADIUS}
                    strokeWidth={strokeWidth}
                    style={{
                        strokeDasharray : CIRCUMFERENCE,
                        strokeDashoffset: dashoffset,
                    }}
                />
            </svg>
            <h4 className={`${SELECTOR}__count`}>
                {countdown}
            </h4>
        </CountdownStyled>
    );
}

/* Default Props */
Countdown.defaultProps = {
    color           : colors.get('helper'),
    background      : 'transparent',
    seconds         : 10,
    size            : 32,
    strokeWidth     : 8,
    onFinishCallback: (seconds, log) => log && console.log(LOG_PREFIX, seconds, 'seconds finished;'),
};

/* Exporting */
export default Countdown;
