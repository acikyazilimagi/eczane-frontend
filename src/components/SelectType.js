import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Grid } from "@mui/material";
import styled from "styled-components";
const SelectType = ({ alignment, handleChange }) => {
  const CustomToggleButton = styled(ToggleButton)({
    "&.MuiButtonBase-root": {
      textTransform: "none",
      backgroundColor: "white",
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#F83B3B",
    },
  });

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        maxWidth: "unset",
        marginTop: "2rem",
      }}
      item
      xs={6}
    >
      <ToggleButtonGroup
        textTransform={"none"}
        color="secondary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <CustomToggleButton
          sx={{
            padding: "0.25rem 1rem",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
          }}
          value="harita"
        >
          Haritada
        </CustomToggleButton>
        <CustomToggleButton
          sx={{
            padding: "0.25rem 1rem",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
          }}
          value="liste"
        >
          Listede
        </CustomToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};
export default SelectType;
