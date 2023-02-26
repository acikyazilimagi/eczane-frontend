import Control from "react-leaflet-custom-control";
import { FullscreenControl } from "react-leaflet-fullscreen";

const FullScreenIcon = () => (
  <Control position="topright">
    <FullscreenControl
      forceSeparateButton
      position="topright"
      content="<span class='fullScreenBtn'></span>"
      title="Tam Ekran"
    />
  </Control>
);

export default FullScreenIcon;
