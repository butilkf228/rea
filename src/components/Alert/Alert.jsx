import { StyledAlert } from './StyledAlert.styled';

export const Alert = ({text, type})=>{
    return <StyledAlert type={type}>{text}</StyledAlert>
}

Alert.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string.oneOf(['error', 'warning', 'success'])
}