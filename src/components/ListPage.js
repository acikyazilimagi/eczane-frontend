import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import Divider from "@mui/material/Divider";
import Link from '@mui/material/Link';

const healthTypes ={
  "Pharmacy": 'Eczane',
  "Hospital": 'Hastane',
}

const healthSettings = {
  [healthTypes.Pharmacy]: {
    icon: "./pill.png",
    color: "#F83B3B"
  },
  [healthTypes.Hospital]: {
    icon: "./hospital.png",
    color: "#8CF134"
  }
}
const fontProps = {
  fontFamily: "Segoe UI",
  fontWeight: "600",
  fontSize: "13px",
}
const stackProps = {
  direction:"row", flexWrap:"wrap", alignItems:"center"

}
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
                  <Box>
                    <Stack
                      direction="row"
                      spacing={2}
                      margin="0px"
                      padding="0px 12px"
                    >
                      <Box padding="3px 4px 0px 0px">
                        <img
                          src={healthSettings[item.type]?.icon}
                          width="16px"
                          height="16px"
                          alt="./pill.png"
                        ></img>
                      </Box>
                      <Typography  marginLeft={"2px!important"} {...fontProps}  color={healthSettings[item.type]?.color}>
                        {item.type}
                      </Typography>
                    </Stack>
                  </Box>
                  <Typography {...fontProps} marginTop={"10px"}  textAlign={"left"}  fontSize="20px" p="0px 12px" color={"#182151"}>
                    {item.name}
                  </Typography>

                  <Divider style={{ width: "93.5%", margin: "7px 4px",fontWeight:"700" }}/>

                  <Stack direction="column">
                    <Stack marginLeft={"6px"} direction="row" justifyContent={"space-between"} padding="3x">
                        <Stack {...stackProps} >
                          <LocationOnIcon />
                          <Link 
                            href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`} 
                            underline="none"
                            color="#182151"
                            fontSize={"12px"}
                            >
                              {item.city} | {item.district}
                          </Link>
                          
                        </Stack>

                        <Stack {...stackProps} marginRight={"2px"}>
                          {item.phone && (
                            <>
                              <CallIcon />
                              <Link href={`tel:${item.phone}`} 
                                    underline="none"
                                    color="gray"
                                    fontSize={"9px"}
                                    
                            >{item.phone}</Link>
                            </>
                        )}
                        </Stack>
                    </Stack>
                    <Typography
                    {...fontProps}
                      marginTop={"10px"} textAlign={"left"}   fontSize="10px" p="0px 12px" color={"gray"}
                    >
                      {item.address}
                    </Typography>
                  </Stack>
              </Grid>
            ))}
          </div>
        </Box>)
}
export default ListPage