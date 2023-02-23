import Styled from '../Styled/Styled';

const Card = { ...Styled };

Card.defaultProps = {
    ...Styled.defaultProps,
    padding: '16px',
    radius : 12,
    shadow : true,
};

export default Card;
