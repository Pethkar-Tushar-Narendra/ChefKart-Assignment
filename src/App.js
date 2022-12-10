import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataTable from './DataTable/DataTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
