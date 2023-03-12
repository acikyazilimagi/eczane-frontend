import { Button } from "./Button";
import PropTypes from "prop-types";

export default {
  title: "Button",
  component: Button,
};

const Template = () => (
  <div
    style={{
      display: "flex",
      gap: "10px",
      background: "#010339",
      height: "500px",
      padding: "20px",
    }}
  >
    <Button label="Hepsi" activeColor="red" />
    <Button label="Hastane" activeColor="red" />
    <Button label="Eczane" activeColor="red" />
    <Button label="Veteriner" activeColor="red" />
    <Button label="Psikolojik Destek" activeColor="red" active />
    <Button label="Diyaliz" activeColor="red" />
    <Button label="Medikal" activeColor="red" />
    <Button label="Optik" activeColor="red" />
  </div>
);

export const TypeOptions = Template.bind({});
TypeOptions.args = {
  size: "large",
};

const Temp2 = () => (
  <div
    style={{
      display: "flex",
      background: "#010339",
      height: "500px",
      padding: "20px",
    }}
  >
    <Button
      label="Harita"
      background="blue"
      activeColor="red"
      radius="left"
      size="medium"
    />
    <Button
      label="Liste"
      background="blue"
      activeColor="red"
      radius="right"
      size="medium"
      active
    />
  </div>
);

export const DisplayOptions = Temp2.bind({});
DisplayOptions.args = {
  size: "large",
};

const CitySelection = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gridAutoRows: "50px",
      background: "#010339",
      height: "500px",
      padding: "20px",
      gap: "20px",
    }}
  >
    <Button
      label="Osmaniye"
      background="blue"
      activeColor="white"
      size="large"
      block
    />
    <Button
      label="Kahramanmaras"
      background="blue"
      activeColor="white"
      size="large"
      active
      block
    />
    <Button
      label="Adiyaman"
      background="blue"
      activeColor="white"
      size="large"
      block
    />
    <Button
      label="Malatya"
      background="blue"
      activeColor="white"
      size="large"
      block
    />
    <Button
      label="Diyarbakir"
      background="blue"
      activeColor="white"
      size="large"
      block
    />
    <Button
      label="Osmaniye"
      background="blue"
      activeColor="white"
      size="large"
      block
    />
    <Button label="Tüm İllere Dön" variant="text" size="large" />
  </div>
);

export const CityOptions = CitySelection.bind({});
CityOptions.args = {
  size: "large",
};

export const CardButtonTemplate = ({ args }) => {
  return (
    <div
      style={{
        background: "#EFF5FF",
        height: "500px",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100px",
          marginBottom: "10px",
        }}
      >
        <Button label="Ara" background="teal" {...args} block />
      </div>
      <div
        style={{
          width: "100px",
        }}
      >
        <Button label="Harita'da Gor" background="blue" block {...args} />
      </div>
    </div>
  );
};

export const CardButton = CardButtonTemplate.bind({});
CardButton.args = {
  size: "small",
};

CardButtonTemplate.propTypes = {
  args: PropTypes.object,
};
