import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { About } from "../pages/About";
import { Brands } from "../pages/Brands";
import { BrandPage } from "../pages/BrandPage";
import { Contact } from "../pages/Contact";
import { Field } from "../pages/Field";
import { Home } from "../pages/Home";
import { Industries } from "../pages/Industries";
import { Legal } from "../pages/Legal";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";
import { ProductDetail } from "../pages/ProductDetail";
import { Projects } from "../pages/Projects";
import { Resources } from "../pages/Resources";
import { SolutionDetail } from "../pages/SolutionDetail";
import { Solutions } from "../pages/Solutions";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route element={<About />} path="about" />
        <Route element={<Products />} path="products" />
        <Route element={<ProductDetail />} path="products/:category/:slug" />
        <Route element={<Solutions />} path="solutions" />
        <Route element={<SolutionDetail />} path="solutions/:slug" />
        <Route element={<Industries />} path="industries" />
        <Route element={<Brands />} path="brands" />
        <Route element={<BrandPage />} path="brands/:brand" />
        <Route element={<Projects />} path="projects" />
        <Route element={<Field />} path="field" />
        <Route element={<Resources />} path="resources" />
        <Route element={<Contact />} path="contact" />
        <Route element={<Legal type="privacy" />} path="privacy" />
        <Route element={<Legal type="terms" />} path="terms" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
}
