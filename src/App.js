import React from "react";
import "./App.css";
import useFetch from "./components/useFetch";
import MainViewContaier from "./components/MainViewContainer";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://eczaneapi.afetharita.com/api/cityWithDistricts "
  );
  if (loading) return <h1>Yükleniyor</h1>;
  if (error) console.log(error);

  return <MainViewContaier />;
}
