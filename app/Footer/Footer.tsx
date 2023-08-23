import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by&nbsp;
      <a target={"_blank"} href="https://www.johnversus.dev" rel="noreferrer">
        John
      </a>
    </footer>
  );
};

export default Footer;
