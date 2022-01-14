import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, styled } from '@mui/material/styles';
import Landing from './Pages/Landing';
import Concept from './Pages/Concept';
import './App.css';
import theme from './theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="concept" element={<Concept />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
