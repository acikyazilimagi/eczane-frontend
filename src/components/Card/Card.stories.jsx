import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

const Template = () => (
  <div
    style={{
      background: "#010339",
      height: "500px",
      padding: "20px",
    }}
  >
    <Card />
  </div>
);

export const HastaneCard = Template.bind({});
HastaneCard.args = {};
