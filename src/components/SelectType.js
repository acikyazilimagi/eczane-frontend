
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Grid } from "@mui/material";
import styled from "styled-components";
const SelectType=({alignment,handleChange})=>{const CustomToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#FF6464",
    },
    "&.MuiButtonBase-root": {
      textTransform: "none",
    },
  });



   return( <div
          sx={{
            display: "flex",
            
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            maxWidth: "unset",
          }}
          
        >
          <ToggleButtonGroup
            textTransform={"none"}
            sx={{
              backgroundColor: "white",
              padding: "2",
            }}
            color="secondary"
            value={alignment}
            exclusive
            onChange={handleChange}
            
          >
            <CustomToggleButton value="harita" >Haritada Gör</CustomToggleButton>
            <CustomToggleButton value="liste">Listede Gör</CustomToggleButton>
          </ToggleButtonGroup>
        </div>)

}
export default SelectType