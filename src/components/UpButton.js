import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const UpButton = ({ visible }) => {
  return (
    <button
      style={{
        visibility: visible ? "visible" : "hidden",
        opacity: visible ? "1" : "0",
        transition: "opacity 250ms",
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: "99",
        fontSize: "18px",
        border: "none",
        outline: "none",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
        padding: "15px",
        borderRadius: "4px",
      }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      id="myBtn"
      title="Go to top"
    >
      <ArrowUpwardIcon></ArrowUpwardIcon>
    </button>
  );
};
export default UpButton;
