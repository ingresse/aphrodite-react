/* Packages */
import React from 'react';

/* Icon Itself */
const IconPaymentDiners = (props) => {
    /**
     * Inherit props
     */
    const {
        size,
        width,
        height,
        className,
    } = props;

    /**
     * Render
     */
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={(width || size)}
            height={(height || size)}
            viewBox="0 0 30 30">
            <defs>
                <rect
                    id="path-1"
                    x="0"
                    y="4"
                    width="30"
                    height="22.5"
                    rx="2"
                />
            </defs>
            <g
                id="Pagamento-/-Diners"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd">
                <mask
                    id="mask-2"
                    fill="white">
                    <use
                        xlinkHref="#path-1"
                    />
                </mask>
                <use
                    id="Fundo"
                    fill="#00529E"
                    xlinkHref="#path-1"
                />
                <g
                    id="Diners"
                    mask="url(#mask-2)">
                    <g
                        transform="translate(5.250000, 7.500000)">
                        <path
                            id="Path"
                            fill="#FFFFFF"
                            fillRule="evenodd"
                            d="M11.4131034,14.9672626 C15.6312672,14.9870659 19.4819569,11.631305 19.4819569,7.54826152 C19.4819569,3.08456586 15.6307069,-0.00162978907 11.4131034,5.68434189e-14 L7.78251724,5.68434189e-14 C3.51448276,-0.00162978907 -2.84217094e-14,3.08532673 -2.84217094e-14,7.54826152 C-2.84217094e-14,11.6320659 3.51448276,14.9870659 7.78251724,14.9672626 L11.4131034,14.9672626 L11.4131034,14.9672626 Z"
                        />
                        <path
                            id="Shape"
                            fill="#00529E"
                            fillRule="nonzero"
                            d="M9.44965517,11.5570652 L9.44965517,3.45076087 C11.129569,4.07543478 12.3220948,5.65358696 12.3250086,7.50369565 C12.3220948,9.35391304 11.1294569,10.9307609 9.44965517,11.5570652 M3.37092241,7.50369565 C3.37428448,5.65434783 4.56524138,4.0775 6.24425862,3.45076087 L6.24425862,11.5557609 C4.56524138,10.9294565 3.37428448,9.35304348 3.37092241,7.50369565 M7.8469569,0.652173913 C3.94673276,0.652934783 0.785267241,3.72 0.784482759,7.50369565 C0.785267241,11.2873913 3.94673276,14.3528261 7.8469569,14.3544565 C11.7488621,14.3528261 14.9111121,11.2873913 14.9111121,7.50369565 C14.9111121,3.72 11.7484138,0.653043478 7.8469569,0.652173913"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

/* Exporting */
export default IconPaymentDiners;
