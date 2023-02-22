import "../src/styles/App.scss";
import "leaflet/dist/leaflet.css";
import "react-leaflet-fullscreen/dist/styles.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
