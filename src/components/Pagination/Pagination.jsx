/* Packages */
import React from 'react';
import PropTypes from 'prop-types';
import Paginator from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/pt_BR';

/* UI Library Helpers */
import { colors } from '../../utils';

/* Helper Components */
import { Icon, Placeholder } from '../';

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
            jumpPrevIcon={<>•••</>}
            jumpNextIcon={<>•••</>}
            prevIcon={<Icon slug="arrow" direction="left" color="white" size={25} />}
            nextIcon={<Icon slug="arrow" direction="right" color="white" size={25} />}
            className={`aph-pagination ${className || ''}`}>
            {(!loading) ? (null) : (
                <>
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
                </>
            )}
        </PaginationStyled>
    );
}

/* Default Propeties */
Pagination.defaultProps = {
    loading : true,
    total   : 0,
    current : 1,
    pageSize: 25,
};

/* Properties Types */
Pagination.propTypes = {
    loading: PropTypes.bool,
};

/* Exporting */
export default Pagination;
