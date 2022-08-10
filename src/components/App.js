import './App.css';
import Search from './Search';
import Dropdown from './Dropdown'

function App() {
  
  return (
    <div className='app'>
      <div className='top-section'>
      <h1 className='top-title'>Filter:</h1>
      <Dropdown />
      <Search />
      </div>
    </div>
  );
}

export default App;
