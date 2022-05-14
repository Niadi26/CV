import { Routes, Route } from 'react-router-dom';
import { About } from '../components/About';
import { Contacts } from '../components/Contakts';
import { Portfolio } from '../components/Portfolio';
import { Skills } from '../components/Skills';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<About />}></Route>
            <Route path='skills' element={<Skills />}></Route>
            <Route path='portfolio' element={<Portfolio />}></Route>
            <Route path='contacts' element={<Contacts />}></Route>
            <Route></Route>
        </Routes>
    )
}