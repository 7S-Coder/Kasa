import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
