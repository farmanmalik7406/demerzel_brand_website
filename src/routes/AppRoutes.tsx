import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { About } from "../pages/About";
import { ComingSoon } from "../pages/ComingSoon";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Resources } from "../pages/Resources";
import { SolutionDetail } from "../pages/SolutionDetail";
import { Solutions } from "../pages/Solutions";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route element={<About />} path="about" />
        <Route element={<Solutions />} path="solutions" />
        <Route element={<SolutionDetail />} path="solutions/:slug" />
        <Route element={<Resources />} path="resources" />
        <Route element={<Contact />} path="contact" />
        <Route element={<ComingSoon />} path="coming-soon" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
}
