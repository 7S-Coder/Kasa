import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
