import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const UpButton=({visible})=>{
    
    return(
        <button
        style={{ display: visible ? "inline" : "none" }}
        onClick={() => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0;
        }}
        id="myBtn"
        title="Go to top"
      >
        <ArrowUpwardIcon></ArrowUpwardIcon>
      </button>
    )

}
export default UpButton;

