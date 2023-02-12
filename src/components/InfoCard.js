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
const InfoCard = ({item,index}) => {
    return(
    <>
                  <Box  fontFamily={"Segoe UI"}>
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
                  <Link underline="none"  href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`} >
                  <Typography {...fontProps} marginTop={"10px"}  textAlign={"left"}  fontSize="20px" p="0px 12px" color={"#182151"}>
                    {item.name}
                  </Typography>
                  </Link>
                 

                  <Divider style={{ width: "93.5%", margin: "7px 4px",fontWeight:"700" }}/>

                  <Stack direction="column">
                    <Stack marginLeft={"6px"} marginRight={"2px"} flexWrap={"wrap"} direction="row" justifyContent={"space-between"} padding="3x">
                        <Stack {...stackProps} marginRight={"2px"} marginTop={"2px"}>
                          <LocationOnIcon fontSize="12px"/>
                          <Link 
                            href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`} 
                            color="#4f5fb3"
                            fontSize={"12px"}
                            fontWeight={"600"}
                            >
                              {item.city && item.district
                              && `${item.city} | ${item.district}`.toLocaleUpperCase()}
                          </Link>
                          
                        </Stack>

                          {item.phone && (
                            <Stack {...stackProps} marginLeft={"2px"} marginTop={"2px"}>
                              <CallIcon fontSize="12px"/>
                              <Link 
                                href={`tel:${item.phone}`} 
                                fontSize={"11px"}
                                color={"#4f5fb3"}
                              >
                                {item.phone}
                              </Link>
                            </Stack>
                        )}
                    </Stack>
                    <Typography
                    {...fontProps}
                      marginTop={"10px!important"} textAlign={"left"}   fontSize="11px" p="0px 12px" 
                    >
                      {item.address}
                    </Typography>
                  </Stack>
                  </>
    )
}
export default InfoCard;