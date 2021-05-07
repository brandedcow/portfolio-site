import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";
import AppFooter from "../components/AppFooter";

function DesktopLayout({ routes, socials }) {
  return (
    <>
      <AppHeader routes={routes} socails={socials} />

      <AppContent className="appContent" routes={routes} />

      <AppFooter socials={socials} />
    </>
  );
}

export default DesktopLayout;
