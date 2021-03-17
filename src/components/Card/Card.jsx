import Styled from '../Styled/Styled';

const Card = { ...Styled };

Card.defaultProps = {
    padding     : '15px',
    radius      : 10,
    shadow      : true,
    shadowSpread: '5px',
    ...Styled.defaultProps,
};

export default Card;
