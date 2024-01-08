
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blockchain from './components/Blockchain/ Blockchain';
import Consensus from './components/Consensus/Consensus';
import Header from './components/Header/Header';
import Web3Story from './components/Web3Story/Web3Story';
import HomePage from './pages/HomePage/HomePage';
import Web3Page from './pages/Web3Page/Web3Page';

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path='/web3' element={<Web3Page /> }/>
      <Route path="/web3/web3story" element={<Web3Story /> } />
      <Route path='/web3/blockchain' element={<Blockchain /> }/>
      <Route path='/web3/consensus' element={<Consensus /> }/>
     </Routes>
    </div>
  );
}

export default App;
