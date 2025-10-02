import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/common/Navigation';
import FloatingNav from './components/common/FloatingNav';
import Footer from './components/common/Footer';
import BorgerView from './views/BorgerView';
import PolitikerView from './views/PolitikerView';
import useUserStore from './store/userStore';

function App() {
  const { user, setUserRole } = useUserStore();

  useEffect(() => {
    const applyHashRole = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'borger' || hash === 'politiker') {
        setUserRole(hash);
      }
    };

    applyHashRole();
    window.addEventListener('hashchange', applyHashRole);
    return () => window.removeEventListener('hashchange', applyHashRole);
  }, [setUserRole]);

  useEffect(() => {
    if (!user.role) return;
    const { pathname, search } = window.location;
    window.history.replaceState(null, '', `${pathname}${search}#${user.role}`);
  }, [user.role]);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <FloatingNav />
        <main>
          {user.role === 'politiker' ? <PolitikerView /> : <BorgerView />}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
