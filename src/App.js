import './App.css';
import Center from './Components/Center';
import Header from './Components/Header';
import Left from './Components/Left';
import Right from './Components/Right';

function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <Left />
        <Center />
        <Right />
      </div>
    </>
  );
}

export default App;
