import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Header from "./Header";
import Exp from "./Exp";
import Project from "./Project";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Portfolio />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/skills"
        element={
          <Layout>
            <Skills />
          </Layout>
        }
      />
      <Route
        path="/Contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />

      <Route
        path="/Header"
        element={
          <Layout>
            <Header />
          </Layout>
        }
      />

      <Route
        path="/Exp"
        element={
          <Layout>
            <Exp />
          </Layout>
        }
      />

      <Route
        path="/Project"
        element={
          <Layout>
            <Project />
          </Layout>
        }
      />

      <Route
        path="/Footer"
        element={
          <Layout>
            <Footer />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
