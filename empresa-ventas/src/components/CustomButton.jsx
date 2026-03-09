import "../assets/css/c-button.css";

function Button({ children, style }) {
    return (
        <button className="custom-button" style={{ ...style }}>
            {children}
        </button>
    );
}

export default Button;