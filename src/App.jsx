import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
