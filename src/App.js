import Counter from "./Counter";
import "./styles.css";

import { ThemeProvider } from "./hooks/useTheme";

const App = () => {
  return (
    <ThemeProvider initialValue="dark">
      <Counter />
    </ThemeProvider>
  )
}

export default App;