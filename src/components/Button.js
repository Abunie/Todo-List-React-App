import PropTypes from 'prop-types'
const Button = ({color,text, onClick,bgColor}) => {

    return <button style={{backgroundColor:bgColor, color:color}} onClick={onClick} className="btn">{text}</button>
}
Button.defaultProps ={
    text: 'Task Tracker',
    color: 'white',
    bgColor:'green'
  }
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired


}
export default Button