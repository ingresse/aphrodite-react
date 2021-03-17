/* Packages */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paginator from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/pt_BR';

/* Helper Components */
import Icon from '../Icons/Icon';
import Placeholder from '../Placeholder/Placeholder';

/* Styled Component */
import PaginationStyled from './PaginationStyled';

/* Component Itself */
function Pagination (props) {

    /**
     * Inherit Props
     */
    const {
        loading,
        className,

        ...rest
    } = props;

    /**
     * Render
     */
    return (
        <PaginationStyled
            locale={localeInfo}
            showLessItems={true}
            {...rest}
            as={(!loading) ? Paginator : Placeholder}
            jumpPrevIcon={<Fragment>•••</Fragment>}
            jumpNextIcon={<Fragment>•••</Fragment>}
            prevIcon={<Icon slug="arrow" direction="left" color="inverse" size={25} />}
            nextIcon={<Icon slug="arrow" direction="right" color="inverse" size={25} />}
            className={`aph-pagination ${className || ''}`}>
            {(!loading) ? (null) : (
                <Fragment>
                    <Placeholder
                        width={30}
                        height={30}
                        className="rc-pagination-prev"
                    />
                    {Array.from({ length: 3 }, (number, index) => (
                        <Placeholder
                            width={30}
                            height={30}
                            className="rc-pagination-item"
                            key={`rc-pagination-placeholder-${index}`}
                        />
                    ))}
                    <Placeholder
                        width={30}
                        height={30}
                        className="rc-pagination-next"
                    />
                </Fragment>
            )}
        </PaginationStyled>
    );
}

/* Default Propeties */
Pagination.defaultProps = {
    onChange: () => {},
    loading : true,
    total   : 0,
    current : 1,
    pageSize: 25,
    styles  : {},
};

/* Properties Types */
Pagination.propTypes = {
    onChange: PropTypes.func.isRequired,
    loading : PropTypes.bool,
    total   : PropTypes.number,
    current : PropTypes.number,
    pageSize: PropTypes.number,
    styles  : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

/* Exporting */
export default Pagination;
