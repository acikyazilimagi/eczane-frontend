import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { ToggleButtonGroup } from "@mui/material"
import SelectType from "./SelectType"
import styled from "styled-components"
import ToggleButton from "@mui/material/ToggleButton";


const FiltreYer=({button,handleFilterButton,handleChange,alignment})=>{
    //lİSTE DÜĞMESINE TIKLANDIGINDA VE HOVERLANDIGINDAKI DEGISIM
    const CustomToggleButtonFilter = styled(ToggleButton)({
        "&.Mui-selected, &.Mui-selected:hover": {
          color: "white",
          backgroundColor: "#FF6464",

        },
        "&.MuiToggleButton-root": {
          textTransform: "none",
          color: "white !important",
        },
      });

   return( 

    //DIVLERI DUZENLE YERINE GORE
   
   
   <div container sx={{width:"100%",margin:"90px 0px 40px 0px",justifyContent:"center" }} >
        <div
           >
          <Stack
            sx={{
              border: "solid 0.1px",
              padding: "7px",
              borderRadius: "8px",   
            }}
            direction="row-reverse"
            spacing={2}
            divider={
              <Divider
                sx={{ backgroundColor: "white" }}
                orientation="vertical"
                flexItem
              />
            }
          >
            <ToggleButtonGroup
              sx={{
                padding: "1",
              }}
              value={button}
              exclusive
              onChange={handleFilterButton}
              aria-label="Platform"
            >
              <CustomToggleButtonFilter value="hepsi" c>
                Hepsi
              </CustomToggleButtonFilter>
              <CustomToggleButtonFilter value="Hastane">
                Hastane
              </CustomToggleButtonFilter>
              <CustomToggleButtonFilter value="Eczane">
                Eczane
              </CustomToggleButtonFilter>
            </ToggleButtonGroup>
          </Stack>
        </div>
        <div item md={6} sm={12} display="flex">
        <SelectType handleChange={handleChange} alignment={alignment} ></SelectType>
        </div>
        
        
      </div>)
}

export default FiltreYer