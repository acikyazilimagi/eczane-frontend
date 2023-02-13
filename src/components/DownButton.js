import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DownButton = ({ visible }) => {
  return (
    <button
      style={{ display: visible ? "inline" : "none" }}
      onClick={() => {
        document.body.scrollTop = 860; // For Safari
        document.documentElement.scrollTop = 860;
      }}
      id="downBtn"
      title="Go to buttom"
    >
      <ArrowDownwardIcon></ArrowDownwardIcon>
    </button>
  );
};
export default DownButton;
