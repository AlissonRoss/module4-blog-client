import { Outlet } from 'react-router-dom';
import '../App.css';

export default function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <Outlet/>
      </header>
    </div>
  );
}
