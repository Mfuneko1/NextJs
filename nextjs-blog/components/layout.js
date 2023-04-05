import styles from './layout.module.css'

export default function Layout({ children }) {

   let content = <div className={styles.container}>{children}</div>;
  return content;
}