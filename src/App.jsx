import styles from "./components/App.module.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Details } from "./pages/Details";
import { LandingPage } from "./pages/LandingPage";
export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element = {<Details/>}/>
          <Route exact path="/" element={<LandingPage />}/>
        </Routes>
      </main>
    </Router>
  );
}
