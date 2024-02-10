import Blog from './pages/Blog.js'
import Login from './pages/Login.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
          <Blog/>
      </header>
    </div>
  );
}

export default App;
