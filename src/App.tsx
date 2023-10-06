import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Layout from './components/Layout/Layout';
import UserSingle from './components/Users/UserSingle';
import UsersView from './pages/UsersView';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<UsersView />} />
            <Route path="/users/:userId" element={<UserSingle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
