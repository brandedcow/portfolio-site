import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";

function MobileLayout({ routes, socials }) {
  return (
    <>
      <AppHeader routes={routes} socials={socials} mobile />

      <AppContent className="appContent" routes={routes} mobile />
    </>
  );
}

export default MobileLayout;
