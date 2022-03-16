import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <div className='container'>
          <h1 className='display-1'>Main</h1>
          <hr />
          <Contacts></Contacts>
      </div>
    </>
  );
}

export default App;
