import style from "../styles/Container.module.css";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={style.container}>{children}</div>
    </>
  );
}
