import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState } from "react";
import UpButton from "./UpButton";
import DownButton from "./DownButton";
import Header from "./Header";
import FiltreYer from "./FiltreYer";
import Map from "./Map";
import IlListesi from "./IlListesi";
import ListPage from "./ListPage";
const MainViewContaier = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [mapRef, setMapRef] = React.useState();
  const [alignment, setAlignment] = React.useState("harita");
  const [citydata, setCityData] = React.useState(null);
  const [data, setData] = React.useState(null)
  const [allData, setAllData] = React.useState(null)
  const [button,setButton]=React.useState("hepsi")
  const center = [37.683664, 38.322966];
  const zoom = 7;
  const toggleVisible = (event) => {
    const scrolled = document.body.scrollTop;
    if (scrolled > 480) {
      setVisible(true);
    } else if (scrolled <= 480) {
      setVisible(false);
    }
  };
  const toggleVisible1 = (event) => {
    const scrolled = document.body.scrollTop;
    if (scrolled < 480) {
      setVisible1(true);
    } else if (scrolled >= 480) {
      setVisible1(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  window.addEventListener("scroll", toggleVisible1);
  const handleChange = (event, newAlignment) => {  //TODO DEGISTIR
    setAlignment(newAlignment);
  };
   const handleFilterButton = (event) => {
    setButton(event.target.value);
        if (event.target.value === 'hepsi') {
            setData(allData)
        }
        else {
            const filteredData = allData?.filter((item) => item.type === event.target.value)
            setData(filteredData )
        }
    }
    useEffect(() => {
        axios.get("https://eczaneapi.afetharita.com/api").then((response) => {
            setData(response.data?.data);
            setAllData(response.data?.data);
        }).catch((err) => {
            //setError(err)
        })

    }, []); 
  useEffect(() => {
    axios
      .get("https://eczaneapi.afetharita.com/api/cityWithDistricts ")
      .then((response) => {
        setCityData(response.data);
      })
      .catch((err) => {
      });
  }, []);

  if(data===null){
    return <h2>Loading  </h2>   //LOADBAR EKLE
  }
  return (
    <Paper
      id="fullheight"
      sx={{ bgcolor: "#182151", height: "100%", padding: "0px" }}
      variant="outlined">
      <UpButton visible={visible}/>
      <DownButton visible={visible1}/>
      <Header  alignment={alignment} handleChange={handleChange}/>
      <FiltreYer button={button} handleFilterButton={handleFilterButton}  handleChange={handleChange} alignment={alignment}/>
      {alignment === "harita" && (
      <Map setMapRef={setMapRef} zoom={zoom} center={center} data={data}/>
      )
      }
      <IlListesi citydata={citydata}/>

      {alignment === "liste" && (
        <ListPage data={data}/>
        
      )}
    </Paper>
  );
};
export default MainViewContaier;
