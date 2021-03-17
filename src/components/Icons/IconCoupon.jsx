import React from 'react';
import { getFilteredProps } from './settings';

const IconCoupon = (props) => {
    const { color, ...rest } = getFilteredProps(props);

    return (
        <svg {...rest} viewBox="0 0 30 30">
            <g id="Icon-/-30-/-Cupom-/-White" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(3.000000, 7.000000)" className="aph-icon-fill" fillRule="nonzero">
                    <path d="M23.296875,1.43712575 C22.9091719,1.43712575 22.59375,1.11477844 22.59375,0.718562874 C22.59375,0.321724551 22.2789375,0 21.890625,0 L2.109375,0 C1.7210625,0 1.40625,0.321724551 1.40625,0.718562874 C1.40625,1.11477844 1.09082813,1.43712575 0.703125,1.43712575 C0.3148125,1.43712575 0,1.7588503 0,2.15568862 L0,13.8443114 C0,14.2411497 0.3148125,14.5628743 0.703125,14.5628743 C1.09082813,14.5628743 1.40625,14.8852216 1.40625,15.2814371 C1.40625,15.6782754 1.7210625,16 2.109375,16 L21.890625,16 C22.2789375,16 22.59375,15.6782754 22.59375,15.2814371 C22.59375,14.8852216 22.9091719,14.5628743 23.296875,14.5628743 C23.6851875,14.5628743 24,14.2411497 24,13.8443114 L24,2.15568862 C24,1.7588024 23.6851875,1.43712575 23.296875,1.43712575 Z M22.59375,13.2489102 C21.99525,13.4657725 21.5201719,13.9512814 21.3079688,14.5629222 L2.69203125,14.5629222 C2.479875,13.9512814 2.00475,13.4657725 1.40625,13.2489102 L1.40625,2.75108982 C2.00475,2.53422754 2.47982813,2.04871856 2.69203125,1.43707784 L21.3079688,1.43707784 C21.520125,2.04871856 21.99525,2.53422754 22.59375,2.75108982 L22.59375,13.2489102 Z" id="Shape"></path>
                    <path d="M14.765625,7.03125 C15.9287344,7.03125 16.8750469,6.08498437 16.8750469,4.921875 C16.8750469,3.75876563 15.9287344,2.8125 14.765625,2.8125 C13.6025156,2.8125 12.65625,3.75876563 12.65625,4.921875 C12.65625,6.08498437 13.6025156,7.03125 14.765625,7.03125 Z M14.765625,4.21875 C15.1533281,4.21875 15.4687969,4.53417188 15.4687969,4.921875 C15.4687969,5.30957812 15.153375,5.625 14.765625,5.625 C14.377875,5.625 14.0625,5.30957812 14.0625,4.921875 C14.0625,4.53417188 14.3779219,4.21875 14.765625,4.21875 Z" id="Shape"></path>
                    <path d="M19.078125,8.62495313 C17.9150156,8.62495313 16.96875,9.57121875 16.96875,10.7343281 C16.96875,11.8974375 17.9150156,12.8437031 19.078125,12.8437031 C20.2412344,12.8437031 21.1875,11.8974375 21.1875,10.7343281 C21.1875,9.57121875 20.2412344,8.62495313 19.078125,8.62495313 Z M19.078125,11.4375 C18.6904219,11.4375 18.375,11.1220781 18.375,10.734375 C18.375,10.3466719 18.6904219,10.03125 19.078125,10.03125 C19.4658281,10.03125 19.78125,10.3466719 19.78125,10.734375 C19.78125,11.1220781 19.4658281,11.4375 19.078125,11.4375 Z" id="Shape"></path>
                    <path d="M20.8877813,3.81529687 C20.6132344,3.54070312 20.1680156,3.54070312 19.8934219,3.81529687 L12.2293594,11.4793594 C11.9547656,11.7539531 11.9547656,12.199125 12.2293594,12.4737187 C12.3666563,12.6110156 12.5466094,12.6796875 12.7265156,12.6796875 C12.9064219,12.6796875 13.0864219,12.6110625 13.2236719,12.4737187 L20.8877344,4.80965625 C21.1624219,4.5350625 21.1624219,4.08989062 20.8877812,3.81529687 L20.8877813,3.81529687 Z" id="Path"></path>
                    <path d="M3.515625,4.21875 L7.21875,4.21875 C7.6070625,4.21875 7.921875,3.9039375 7.921875,3.515625 C7.921875,3.1273125 7.6070625,2.8125 7.21875,2.8125 L3.515625,2.8125 C3.1273125,2.8125 2.8125,3.1273125 2.8125,3.515625 C2.8125,3.9039375 3.1273125,4.21875 3.515625,4.21875 Z" id="Path"></path>
                    <path d="M9.703125,5.625 L3.515625,5.625 C3.1273125,5.625 2.8125,5.9398125 2.8125,6.328125 C2.8125,6.7164375 3.1273125,7.03125 3.515625,7.03125 L9.703125,7.03125 C10.0914375,7.03125 10.40625,6.7164375 10.40625,6.328125 C10.40625,5.9398125 10.0914375,5.625 9.703125,5.625 Z" id="Path"></path>
                    <path d="M7.21875,8.4375 L3.515625,8.4375 C3.1273125,8.4375 2.8125,8.7523125 2.8125,9.140625 C2.8125,9.5289375 3.1273125,9.84375 3.515625,9.84375 L7.21875,9.84375 C7.6070625,9.84375 7.921875,9.5289375 7.921875,9.140625 C7.921875,8.7523125 7.6070625,8.4375 7.21875,8.4375 Z" id="Path"></path>
                </g>
            </g>
        </svg>
    );
};

export default IconCoupon;
