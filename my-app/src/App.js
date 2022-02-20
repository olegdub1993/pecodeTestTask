import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import {CharactersPage} from './pages/CharactersPage/CharactersPage';
import { MyWatchListPage } from './pages/MyWatchListPage/MyWatchListPage';
import { Main } from './pages/Main/Main';
import { Header } from './components/Header/Header';
function App() {
  return (
    <div className="App">
          <Router>  
              <Header/>
                  <Routes>
                      <Route path="/" element={<Main/>} />
                      <Route path="/charactersPage" element={<CharactersPage/>} />
                      <Route path="/myWatchListPage" element={<MyWatchListPage/>} />
                      <Route path="*" element={<Navigate to="/"/>} />
                  </Routes>
          </Router>
    </div>
  );
}

export default App;
