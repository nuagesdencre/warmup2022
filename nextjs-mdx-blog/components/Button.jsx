const Button = ({ text }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={event => event.target.innerText = 'Well, this happened.'}
        >
            {text}
        </button>
    )
}
export default Button