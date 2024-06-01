import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import PageTracker from "./PageTracker";

function AppLayout() {
  return (
    <div>
      <Nav />
      <PageTracker />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
