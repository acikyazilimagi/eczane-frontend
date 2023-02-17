import Control from "react-leaflet-custom-control";
import { FullscreenControl } from "react-leaflet-fullscreen";

export const FullScreenIcon = () => (
  <Control position="topright">
    <FullscreenControl
      forceSeparateButton
      position="topright"
      content="<img src='fullscreen.svg' class='fullscreen-img'/>"
      title="Tam Ekran"
    />
  </Control>
);
