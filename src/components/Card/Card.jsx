import styles from "./Card.module.scss";
import { Button } from "../Button/Button";
export const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.topLeftWrapper}>
          <div className={styles.nameWrapper}>
            <div className={styles.type}>
              {/*  TODO: add icon and color variant*/}
              <h4>Psikolojik Destek</h4>
              <h2>Hatay Eczanesi</h2>
            </div>
            <div className={styles.generalType}>
              <h4>Hastane | Genel</h4>
            </div>
          </div>
        </div>
        <div className={styles.topRightWrapper}>
          <Button label="Yuz Yuze" background="teal" size="small" />
          <div className={styles.timeWrapper}>
            <p>09.00-18.00</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.bottomLeftWrapper}>
          <div className={styles.addressWrapper}>
            <h4>İSTANBUL</h4>
            <p>
              Mimar Sinan, Nev, Çavuşdere Cd. No:41 D:Ofis A Blok 34672
              Üsküdar/İstanbul
            </p>
          </div>
          <div className={styles.contactWrapper}>
            <h4>Iletisim</h4>
            <p>+90 531 380 99 00</p>
          </div>
          <div className={styles.infoWrapper}>
            <p>*Randevu oluşturmak için iletişime geçiniz.</p>
          </div>
        </div>
        <div className={styles.bottomRightWrapper}>
          <Button
            label="Harita'da Gor"
            background="blue"
            size="tiny"
            bold
            block
          />
          <Button label="Ara" background="teal" size="tiny" bold block />
        </div>
      </div>
    </div>
  );
};
