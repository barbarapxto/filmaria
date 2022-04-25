import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Error from './pages/Error';
import { ToastContainer } from 'react-toastify';
import './styles.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detalhes/:id' element={<Details />} />
                    <Route path='/favoritos' element={<Favorites />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer autoClose={3000} theme='colored' />
        </div>
    );
}

export default App;
