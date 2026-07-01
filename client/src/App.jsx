import { BrowserRouter } from "react-router-dom";
import WebRoutes from './routes.jsx';
import './styles/App.css';
import "@fontsource/poppins";

function App() {

  return(
    <>
      <BrowserRouter>
        <WebRoutes />
      </BrowserRouter>
    </>
  )
}

export default App;