import './App.css';
import Header from './components/Header.js';
import ToolBar from './components/TollBar.js';
import MainContent from './components/MainContent.js';

function App() {
  return (
    <main className='App'>
      <Header />
      <ToolBar />
      <MainContent />
    </main>
    
  );
}

export default App;
