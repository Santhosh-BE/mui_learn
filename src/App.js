import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
