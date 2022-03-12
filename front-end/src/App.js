import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
