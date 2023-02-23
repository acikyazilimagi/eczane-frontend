import "../src/styles/App.scss";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/dist/styles.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import PropTypes from "prop-types";

import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Afet Sağlık</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Depremden etkilenen bölgelerde sağlık hizmetlerinin verildiği noktaların bilgilerini içeren bir platform."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
