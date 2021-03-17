import React from 'react';
import { getFilteredProps } from './settings';

const IconShareLink = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g id="link" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="unlink">
                    <rect id="Rectangle" fillOpacity="0" fill="#FFFFFF" x="0" y="0" width="30" height="30"></rect>
                    <path d="M23.6083636,6.38218182 C21.7654545,4.53927273 18.7665455,4.54 16.9232727,6.38218182 L13.5807273,9.72472727 C13.2967273,10.0087273 13.2967273,10.4690909 13.5807273,10.7530909 C13.8647273,11.0370909 14.3250909,11.0370909 14.6090909,10.7530909 L17.9516364,7.41054545 C18.5665455,6.796 19.3883636,6.45709091 20.2654545,6.45709091 C21.1429091,6.45709091 21.9647273,6.796 22.5796364,7.41090909 C23.1945455,8.02581818 23.5334545,8.84763636 23.5334545,9.72509091 C23.5334545,10.6021818 23.1945455,11.424 22.5796364,12.0389091 L18.2090909,16.4105455 C16.9327273,17.6861818 14.8567273,17.6861818 13.5803636,16.4105455 C13.2963636,16.1265455 12.836,16.1265455 12.552,16.4105455 C12.268,16.6945455 12.268,17.1552727 12.552,17.4389091 C13.4734545,18.3603636 14.684,18.8210909 15.8945455,18.8210909 C17.1050909,18.8210909 18.3156364,18.3603636 19.2370909,17.4389091 L23.6083636,13.0676364 C24.4981818,12.1781818 24.9883636,10.9909091 24.9883636,9.72509091 C24.9883636,8.45890909 24.4981818,7.272 23.6083636,6.38218182 Z" id="Path" className="aph-icon-fill" fillRule="nonzero"></path>
                    <path d="M14.8661818,19.7527273 L12.0378182,22.5810909 C11.4229091,23.196 10.6010909,23.5349091 9.72363636,23.5349091 C8.84654545,23.5349091 8.02436364,23.196 7.40945455,22.5810909 C6.13345455,21.3050909 6.13345455,19.2287273 7.40945455,17.9527273 L11.5236364,13.8385455 C12.1385455,13.224 12.9603636,12.8850909 13.8378182,12.8850909 C14.7149091,12.8850909 15.5367273,13.224 16.1516364,13.8385455 C16.4356364,14.1225455 16.896,14.1225455 17.18,13.8385455 C17.464,13.5545455 17.464,13.0941818 17.18,12.8101818 C15.3374545,10.9676364 12.3385455,10.9672727 10.4949091,12.8101818 L6.38072727,16.9247273 C5.49127273,17.8141818 5.00109091,19.0014545 5.00109091,20.2672727 C5.00109091,21.5327273 5.49127273,22.72 6.38109091,23.6094545 C7.27054545,24.4992727 8.45781818,24.9894545 9.72327273,24.9894545 C10.9890909,24.9894545 12.1763636,24.4992727 13.0658182,23.6094545 L15.8941818,20.7810909 C16.1781818,20.4970909 16.1781818,20.0367273 15.8941818,19.7527273 C15.6101818,19.4687273 15.1501818,19.4687273 14.8661818,19.7527273 Z" id="Path" className="aph-icon-fill" fillRule="nonzero"></path>
                </g>
            </g>
        </svg>
    );
};

IconShareLink.defaultProps = {
    size  : 30,
    width : 30,
    height: 30,
}

export default IconShareLink;
