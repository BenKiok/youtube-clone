import '../styling/App.css';
import Nav from './Nav';
import Content from './Content';
import Suggestions from './Suggestions';
import Comments from './Comments';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Content/>
      <Suggestions/>
      <Comments/>
    </div>
  );
}

export default App;
