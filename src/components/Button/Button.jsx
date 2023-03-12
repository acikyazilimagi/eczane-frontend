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
  block,
  variant,
  bold,
}) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className={clsx(styles.button, {
          [styles.activeRed]: activeColor === "red" && active,
          [styles.activeWhite]: activeColor === "white" && active,
          [styles.backgroundDarkBlue]: background === "dark-blue",
          [styles.backgroundTeal]: background === "teal",
          [styles.backgroundBlue]: background === "blue",
          [styles.radiusRight]: radius === "right",
          [styles.radiusLeft]: radius === "left",
          [styles.sizeTiny]: size === "tiny",
          [styles.sizeSmall]: size === "small",
          [styles.sizeMedium]: size === "medium",
          [styles.sizeLarge]: size === "large",
          [styles.block]: block,
          [styles.text]: variant === "text",
          [styles.bold]: bold,
        })}
      >
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  background: PropTypes.oneOf(["none", "dark-blue", "blue", "teal"]),
  activeColor: PropTypes.oneOf(["red", "white"]),
  size: PropTypes.oneOf(["tiny", "small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  radius: PropTypes.oneOf(["none", "left", "right", "both"]),
  active: PropTypes.bool,
  block: PropTypes.bool,
  variant: PropTypes.oneOf(["text"]),
  bold: PropTypes.bool,
};
