import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
