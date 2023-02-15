import Others from '../Others';
import styles from './Header.module.scss';

export const Header = () => (
    <div className={styles.headerRowWrapper}>
      <div className={styles.headerWrapper}>
        <img className={styles.logo} src="/logo.png" alt="logo" />
        <h1 className={styles.logoText}>Afet Sağlık</h1>
      </div>
      <Others />
    </div>
);
