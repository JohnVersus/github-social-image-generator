import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Powered by&nbsp;
      <a
        target={"_blank"}
        href="https://github.com/JohnVersus"
        rel="noreferrer"
      >
        John
      </a>
    </footer>
  );
};

export default Footer;
