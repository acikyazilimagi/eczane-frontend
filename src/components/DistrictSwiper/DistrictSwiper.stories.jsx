import { DistrictSwiper } from "./DistrictSwiper";

export default {
  title: "Ilce Swiper",
  component: DistrictSwiper,
};

const SwiperTemplate = () => (
  <div
    style={{
      height: "500px",
      background: "#010339",
      padding: "20px",
    }}
  >
    <DistrictSwiper />
  </div>
);
export const DistrictOpts = SwiperTemplate.bind({});
