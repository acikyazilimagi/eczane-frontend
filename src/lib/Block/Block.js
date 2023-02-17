import clsx from "clsx";
import PropTypes from "prop-types"; // ES6
import styles from "./Block.module.scss";

export const Block = ({ children, styleName, zeroPaddingOnMobile }) => {
  return (
    <div
      className={clsx(styles.block, {
        [styleName]: !!styleName,
        [styles.zeroPadOnMobile]: zeroPaddingOnMobile,
      })}
    >
      {children}
    </div>
  );
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  styleName: PropTypes.string,
  zeroPaddingOnMobile: PropTypes.bool,
};
