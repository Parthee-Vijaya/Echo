import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Hero from './components/common/Hero';
import ChatInterface from './components/chat/ChatInterface';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main>
          <Hero />
          <ChatInterface />
        </main>
      </div>
    </Router>
  );
}

export default App;
