import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.headerRowWrapper}>
      <div className={styles.headerWrapper}>
        <img className={styles.logo} src="/logo.svg" alt="logo" />
        <h1 className={styles.logoText}>Afet Sağlık</h1>
      </div>
    </div>
  );
};
