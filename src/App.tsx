import Form from "./Pages/Form";
import Card from "./Pages/Card";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
