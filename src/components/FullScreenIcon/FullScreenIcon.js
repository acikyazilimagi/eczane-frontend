import Control from "react-leaflet-custom-control";
import { FullscreenControl } from "react-leaflet-fullscreen";

export const FullScreenIcon = () => (
  <Control position="topright">
    <FullscreenControl
      forceSeparateButton
      position="topright"
      content="<span class='fullScreenBtn'></span>" //"<img src='/icons/fullscreen.svg' class='fullscreen-img'/>"
      title="Tam Ekran"
    />
  </Control>
);
