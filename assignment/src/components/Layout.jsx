import Aside from "./Aside";
import "./Layout.css";

function Layout(props) {
  const { children } = props;

  return (
    <section id="layout">
      <section id="header">Wanted Pre-onboarding course</section>
      <section id="bottomSide">
        <Aside />
        <section id="main">{children}</section>
      </section>
    </section>
  );
}

export default Layout;
