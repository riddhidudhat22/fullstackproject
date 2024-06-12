import { Route, Routes } from "react-router-dom";
import UserRoute from "./route/UserRoute";
import AdminRoute from "./route/AdminRoute";
import PrivateRoute from "./route/PrivateRoute";
import { Provider } from "react-redux";
import { congigstate } from "./redux/Store";
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from "./context/Themcontext";
import { ContactProvider } from "./context/Contactcontext";


function App() {
  const { store, persistor } = congigstate();
  return (
    <>
      <ContactProvider>
        <ThemeProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Routes>
                <Route exact path="/*" element={<UserRoute />} />

                <Route element={<PrivateRoute />}>
                  <Route exact path="/admin/*" element={<AdminRoute />} />
                </Route>

              </Routes>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </ContactProvider>
    </>
  );
}

export default App;
