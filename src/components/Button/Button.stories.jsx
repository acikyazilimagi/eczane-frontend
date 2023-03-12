import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => (
  <div
    style={{
      display: "flex",
      gap: "10px",
      background: "#010339",
      height: "500px",
      padding: "20px",
    }}
  >
    <Button label="Hepsi" active={true} {...args} />
    <Button label="Hastane" active={false} {...args} />
    <Button label="Eczane" active={false} {...args} />
    <Button label="Veteriner" active={false} {...args} />
    <Button label="Psikolojik Destek" active={false} {...args} />
    <Button label="Diyaliz" active={false} {...args} />
    <Button label="Medikal" active={false} {...args} />
    <Button label="Optik" active={false} {...args} />
  </div>
);

export const TypeOptions = Template.bind({});
TypeOptions.args = {
  size: "large",
};

const Temp2 = (args) => (
  <div
    style={{
      display: "flex",
      gap: "10px",
      background: "#010339",
      height: "500px",
      padding: "20px",
    }}
  >
    <Button label="Harita" {...args} />
    <Button label="Liste" {...args} />
  </div>
);

export const DisplayOptions = Temp2.bind({});
DisplayOptions.args = {
  size: "large",
};
