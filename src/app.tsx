import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import { Navigation } from './components/navigation/ui/Navigation';
function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
            </Routes>
        </>
    );
}

export default App;
