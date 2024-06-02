function Button({ children, type = "", onClick, disabled }) {
  if (type === "primary")
    return (
      <button
        className="btn primary"
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  return (
    <button
      className="btn sec"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
