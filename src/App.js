import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import Login from "./components/Login/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import Home from "./components/Home/index"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home" component={Home} />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
