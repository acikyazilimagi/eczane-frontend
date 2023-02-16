import styles from "./Block.module.scss";

export const Block = ({ children, styleName, zeroPaddingOnMobile }) => {
  return (
    <div
      className={`${styles.block} ${styleName} ${
        zeroPaddingOnMobile && styles.zeroPad
      }`}
    >
      {children}
    </div>
  );
};
