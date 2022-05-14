import { Router } from './utils/Router';
import './App.css';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Router />
    </div>
  );
}

export default App;
