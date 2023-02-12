import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

const DescriptionCard = ({ item }) => {

    return (
        <Stack
            sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
            }}
            width="320px"
        >
            <Box>
                <Stack
                    direction="row"
                    spacing={0}
                    margin="0px"
                    padding="0px 12px"
                >
                    <Box padding="3px 4px 0px 0px">
                        <img
                            src="./pill.png"
                            width="16px"
                            height="16px"
                            alt="./pill.png"
                        ></img>{" "}
                        {
                            // Alternaif image eklenebilir
                        }
                    </Box>
                    <Typography margin="0px" color={"#F83B3B"}>
                        {/* title prop */}
                        {item.type}
                    </Typography>
                </Stack>
            </Box>
            <Typography fontSize="24px" p="0px 12px">
                {item.name}
            </Typography>

            <Divider style={{ width: "93.5%", margin: "7px 4px" }} />

            <Stack direction="column">
                <Stack direction="row" padding="3x">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <LocationOnIcon></LocationOnIcon>
                            <a
                                href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`}
                            >
                                {item.city} | {item.district}
                            </a>
                        </div>
                        {item.phone &&
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <CallIcon></CallIcon>
                                <a href={item.phone}>{item.phone}</a>
                            </div>}
                    </div>
                </Stack>
                <Typography
                    padding="0px 12px"
                    display="absolute"
                    color="#182151"
                    sx={{
                        margin: 0,
                        opacity: 0.63,
                    }}
                >
                    {item.additionalAddressDetails}
                </Typography>
            </Stack>
        </Stack>
    )

}
export default DescriptionCard;
