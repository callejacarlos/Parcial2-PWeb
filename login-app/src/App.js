import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Catalogo from "./pages/catalogos";
import AcercaDe from "./pages/acercade";
import Contacto from "./pages/contacto";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/catalogos" element={<Catalogo/>} />

          <Route path="/Acercade" element={<AcercaDe/>}/>

          <Route path="/Contacto" element={<Contacto/>}/>
          
        </Routes>
      </AuthProvider>
    </div>
  );
}


export default App;

