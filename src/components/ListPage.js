import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import InfoCard from "./InfoCard";


const ListPage= ({data})=>{
    return(<Box
          sx={{
            flexGrow: 1,
            marginTop: "30px",
            height: "500px",
            overflow: "auto",
          }}
          fontFamily={"Segoe UI"}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "7.5px",
              justifyContent: "center",
            }}
          >
            {data?.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index} backgroundColor="white" borderRadius={"10px"} padding={"5px"}  width="320px">
             <InfoCard key={index} index={index} item={item}/>
             </Grid>
            ))}
          </div>
        </Box>)
}
export default ListPage