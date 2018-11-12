/* Packages */
import React from 'react';
import { toast } from 'react-toastify';

toast.inverse = (content = '', props = {}) => {
    return toast(content, {
        ...props,
        className: 'Toastify__toast--inverse',
    });
};

toast.black = toast.inverse;

export default toast;
