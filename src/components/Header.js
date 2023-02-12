import { Typography } from "@mui/material";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        marginTop: "36px",
      }}
    >
      <img
        src="/logo.png"
        alt="logo"
        style={{ aspectRatio: "auto", width: "60px" }}
      />
      <Typography
        sx={{ color: "white", fontSize: "25", fontFamily: "sans-serif" }}
      >
        Hastaneler ve <br />
        Eczaneler
      </Typography>
    </div>
  );
};
export default Header;
