import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Button.module.scss";
export const Button = ({
  label,
  size,
  radius,
  onClick,
  activeColor,
  active,
  background,
}) => {
  console.log(size, radius, activeColor, active);
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={clsx(styles.button, {
          [styles.activeRed]: activeColor === "red" && active,
          [styles.activeWhite]: activeColor === "white" && active,
          [styles.backgroundBlue]: background === "blue",
        })}
      >
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  background: PropTypes.oneOf(["none", "blue"]),
  activeColor: PropTypes.oneOf(["red", "white"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  radius: PropTypes.oneOf(["none", "left", "right", "both"]),
  active: PropTypes.bool,
};
