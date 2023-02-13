import Others from "./Others";
import logo from "../../icons/eczane-logo.png"

export const Header = () => {
  return (
    <div className="header-top">
      <div className="logo-wrapper">
      <img src={logo} alt="logo" />
      <h1>
        Hastaneler, Eczaneler <br/> 
       <span> Ve Veterinerler </span> 
      </h1>
      </div>
      <Others />
    </div>
  );
};
