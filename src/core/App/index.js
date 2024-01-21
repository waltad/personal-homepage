import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import HomePage from "../../features/homePage"
import { GlobalStyles } from "./GlobalStyles";
import { selectIsThemeDark } from "../../common/themeButton/themeSlice";
import { themeDark, themeLight } from "./theme";

export const App = () => {
  const isThemeDark = useSelector(selectIsThemeDark);

  return (
    <ThemeProvider theme={isThemeDark ? themeDark : themeLight}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
