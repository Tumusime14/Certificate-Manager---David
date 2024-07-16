import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

const App: FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">{/* Main content goes here */}</div>
    </div>
  );
};

export default App;