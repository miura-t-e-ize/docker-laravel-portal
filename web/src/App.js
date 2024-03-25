import './App.css';
import { Routes, Route } from "react-router-dom";
import { Top } from './pages/Top';
import { Login } from './pages/Login';

function App() {
  return (
    <>
      <h1>router-test</h1>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/top" element={ <Top /> } />
      </Routes>
    </>
  );
}

export default App;
