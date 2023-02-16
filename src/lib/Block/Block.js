import clsx from "clsx";
import styles from "./Block.module.scss";

export const Block = ({ children, styleName, zeroPaddingOnMobile }) => {
  return (
    <div
      className={clsx(styles.block, {
        [styleName]: !!styleName,
        [styles.zeroPad]: zeroPaddingOnMobile,
      })}
    >
      {children}
    </div>
  );
};
