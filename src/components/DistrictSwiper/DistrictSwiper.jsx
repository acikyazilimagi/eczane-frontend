import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./DistrictSwiper.module.scss";
import { Button } from "../Button/Button";
export const DistrictSwiper = () => {
  const items = [
    <Button size="small" key={1} label="Hepsi" />,
    <Button size="small" key={2} label="Elbistan" />,
    <Button size="small" key={3} label="Afsin" />,
    <Button size="small" key={4} label="Nurhak" />,
    <Button size="small" key={5} label="Cayyolu" active activeColor="red" />,
    <Button size="small" key={6} label="Umitkoy" />,
    <Button size="small" key={7} label="Cankaya" />,
    <Button size="small" key={8} label="Hacettepe" />,
    <Button size="small" key={9} label="Etlik" />,
    <Button size="small" key={10} label="Etimesgut" />,
  ];
  return (
    <div className={styles.swiper}>
      <AliceCarousel
        items={items}
        disableDotsControls
        animationType="slide"
        renderPrevButton={() => {
          return <button type="button">Prev</button>;
        }}
        renderNextButton={() => {
          return <button type="button">Next</button>;
        }}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 5,
            itemsFit: "contain",
          },
        }}
      />
    </div>
  );
};
