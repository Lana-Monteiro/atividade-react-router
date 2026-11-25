import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/LayoutComponents";

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const About = lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About }))
);
const Contact = lazy(() =>
  import("./pages/Contact").then((module) => ({ default: module.Contact }))
);
const UserProfile = lazy(() =>
  import("./pages/UserProfile").then((module) => ({
    default: module.UserProfile,
  }))
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound }))
);

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<p className="loading">Carregando página...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;