import "./test-style.css";

export const TestFooter = () => {
  return (
    <div className="test-footer">
      <h2 className="test-footer-h2">Test Footer</h2>
      <button
        className="test-footer-button"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click this
      </button>
    </div>
  );
};
