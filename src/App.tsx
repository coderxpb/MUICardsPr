
import {CardContainer} from "./components/CardContainer";
import { theme } from './muiTheme';
import { ThemeProvider } from '@mui/material';

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CardContainer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
