import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./App.css";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";

// Lazy load các trang
const Home = lazy(() => import("./pages/HomePage"));
const Company = lazy(() => import("./pages/Company"));
const Business = lazy(() => import("./pages/Bussiness"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const Blog = lazy(() => import("./pages/Blog"));
const Post = lazy(() => import("./pages/Post"));

// Loading spinner khi lazy load
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};
// Component tạo độ trễ cho trang
const PageWithDelay = ({ children, delay = 1000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true); // Hiển thị trang sau khi delay
    }, delay);

    return () => clearTimeout(timeout); // Dọn dẹp khi component unmount
  }, [delay]);

  return show ? children : <LoadingSpinner />; // Hiển thị spinner nếu chưa đến thời gian delay
};

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <Header
        home={t("Home")}
        company={t("Company")}
        business={t("Business")}
        blog={t("Blog")}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <PageWithDelay delay={1500}>
                <Home />
              </PageWithDelay>
            }
          />
          <Route
            path="/company"
            element={
              <PageWithDelay delay={1500}>
                <Company />
              </PageWithDelay>
            }
          />
          <Route
            path="/business"
            element={
              <PageWithDelay delay={1500}>
                <Business />
              </PageWithDelay>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWithDelay delay={1500}>
                <ContactForm />
              </PageWithDelay>
            }
          />
          <Route
            path="/blog"
            element={
              <PageWithDelay delay={1500}>
                <Blog />
              </PageWithDelay>
            }
          />
          <Route
            path="/posts/:id"
            element={
              <PageWithDelay delay={1500}>
                <Post />
              </PageWithDelay>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
