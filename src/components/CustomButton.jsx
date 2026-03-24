import "../assets/css/c-button.css";

function Button({ children, style, ...props }) {
    return (
        <button className="custom-button" style={{ ...style }} {...props}>
            {... children}
        </button>
    );
}

export default Button;