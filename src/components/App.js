import '../styling/App.css';
import Nav from './Nav';
import Content from './Content';
import Suggestions from './Suggestions';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Content/>
      <Suggestions/>
    </div>
  );
}

export default App;
