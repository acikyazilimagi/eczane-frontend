import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FILTER } from "./Header/HeaderRow";
import { CITIES } from "../lib/city";

const healthSettings = {
  [FILTER.ECZANE]: {
    icon: "./pill.png",
    color: "#F83B3B",
  },
  [FILTER.HASTANE]: {
    icon: "./hospital.png",
    color: "#4bd80e",
  },
  [FILTER.VETERINER]: {
    icon: "./vet.png",
    color: "#fc6868",
  },
};
const fontProps = {
  fontFamily: "SegoeUI, sans-serif",
  fontWeight: "500",
  fontSize: "16px",
};
const stackProps = {
  direction: "row",
  flexWrap: "wrap",
  alignItems: "center",
};

const InfoCard = ({ item, districtMap }) => {
  const [show, setShow] = useState(false);
  const cityName = CITIES?.[item.cityId]?.key;
  const districtName = districtMap.get(item.districtId);

  return (
    <>
      <Box paddingTop={"10px"} fontFamily={"SegoeUI, sans-serif"}>
        <Stack
          direction="row"
          spacing={2}
          margin="0px"
          padding="0px 12px"
          alignItems="center"
        >
          <Box padding="0 4px 0px 0px">
            <img
              src={healthSettings[item.typeId]?.icon}
              width="16px"
              height="16px"
              alt="Icon"
            ></img>
          </Box>
          <Typography
            marginLeft={"2px!important"}
            {...fontProps}
            fontWeight="600"
            color={healthSettings[item.typeId]?.color}
          >
            {item.typeId === 1
              ? "Hastane"
              : item.typeId === 2
              ? "Eczane"
              : item.typeId === 4
              ? "Veteriner"
              : "-"}
          </Typography>
        </Stack>
      </Box>
      <Link
        underline="none"
        href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`}
      >
        <Typography
          {...fontProps}
          textAlign={"left"}
          fontSize="20px"
          fontWeight="600"
          p="0px 12px"
          color={"#182151"}
        >
          {item.name}
        </Typography>
      </Link>

      {item.phone && (
        <Stack {...stackProps} marginLeft={"12px"} marginTop={"10px"}>
          <CallIcon fontSize="12px" />
          <Link href={`tel:${item.phone}`} fontSize={"16px"} color={"#4f5fb3"}>
            {item.phone}
          </Link>
        </Stack>
      )}

      <Divider
        style={{ width: "93.5%", margin: "7px 4px", fontWeight: "700" }}
      />

      <Stack direction="column">
        <Stack
          marginLeft={"6px"}
          marginRight={"2px"}
          flexWrap={"wrap"}
          direction="row"
          justifyContent={"space-between"}
          padding="3px"
        >
          <Stack {...stackProps} marginRight={"2px"} marginTop={"2px"}>
            <LocationOnIcon fontSize="12px" />
            <Link
              href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`}
              color="#4f5fb3"
              fontSize={"16px"}
              fontWeight={"600"}
            >
              {cityName} | {districtName}
            </Link>
          </Stack>
        </Stack>
        <Typography
          {...fontProps}
          marginTop={"10px!important"}
          textAlign={"left"}
          fontSize="16px"
          p="0px 12px"
        >
          {item.address}
        </Typography>

        {item.additionalAddressDetails !== "" ? (
          <Typography
            {...fontProps}
            marginTop={"10px!important"}
            textAlign={"left"}
            fontSize="16px"
            p="0px 12px"
            color={"gray"}
          >
            {item.additionalAddressDetails}
          </Typography>
        ) : (
          ""
        )}

        <div style={{ paddingBottom: "10px" }}></div>

        <Box
          sx={{
            display: show ? "block" : "none",
            backgroundColor: "#fff",
            position: "absolute",
            width: "100%",
            height: "12vh",
            top: "63px",
            left: "0px",
            right: "0px",
            borderRadius: "5px",
            zIndex: 999,
          }}
        >
          <Box component="span" sx={{ p: 2, display: "inline-block" }}>
            {item.additionalAddressDetails}
          </Box>
          <Button
            sx={{
              position: "absolute",
              top: "-30px",
              right: "10px",
              backgroundColor: "#F83B3B",
            }}
            component="span"
            variant="contained"
            color="error"
            size="small"
            startIcon={<ArrowBackIcon />}
            onClick={() => {
              setShow(!show);
            }}
          >
            Geri{" "}
          </Button>
          <hr />
          <Stack
            marginLeft={"6px"}
            marginRight={"2px"}
            flexWrap={"wrap"}
            direction="row"
            justifyContent={"space-between"}
            padding="3x"
          >
            <Stack {...stackProps} marginRight={"2px"} marginTop={"2px"}>
              <LocationOnIcon fontSize="12px" />
              <Link
                href={`https://www.google.com/maps/dir//${item.latitude},${item.longitude}`}
                color="#4f5fb3"
                fontSize={"12px"}
                fontWeight={"600"}
              >
                {item.city &&
                  item.district &&
                  `${item.city} | ${item.district}`.toLocaleUpperCase()}
              </Link>
            </Stack>

            {item.phone && (
              <Stack {...stackProps} marginLeft={"2px"} marginTop={"2px"}>
                <CallIcon fontSize="12px" />
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
        </Box>
      </Stack>
    </>
  );
};
export default InfoCard;
