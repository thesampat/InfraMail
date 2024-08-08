import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

const BaseUrl = `${window.location.protocol}//127.0.0.1:3000/`

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/" element={<Auth />} /> 
      <Route path="*" element={<Navigate to="/" replace />} /> 
    </Routes>
  );
}

export {BaseUrl}
export default App;