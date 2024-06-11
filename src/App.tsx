import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from "./Pages/Form";
import Card from "./Pages/Card";
import Layout from "./Layout/Layout";
import { FormDataProvider } from './Context/FormDataContext';

function App() {
    return (
        <FormDataProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Form />} />
                        <Route path="/card" element={<Card />} />
                    </Routes>
                </Layout>
            </Router>
        </FormDataProvider>
    );
}

export default App;