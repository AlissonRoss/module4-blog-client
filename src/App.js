import Landing from './pages/Landing.js';
import Blog from './pages/Blog.js'
import Login from './pages/Login.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createHashHistory } from 'history';
import './App.css';

function App() {
  return (
    <Router history={createHashHistory({
      basename: "",
      hashType: "slash",
      getUserConfirmation: (message, callback) => callback(window.confirm(message)),
    })}>
      <Routes>
        <Route element={<Landing />}>
          <Route
            exact path="/"
            element={<Login />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
