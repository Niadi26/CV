import { Routes, Route } from 'react-router-dom';
import { About } from '../components/About';
import { Experience } from '../components/Contakts';
import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<About />}></Route>
            <Route path='skills' element={<Skills />}></Route>
            <Route path='portfolio' element={<Portfolio />}></Route>
            <Route path='contacts' element={<Experience />}></Route>
            <Route></Route>
        </Routes>
    )
}