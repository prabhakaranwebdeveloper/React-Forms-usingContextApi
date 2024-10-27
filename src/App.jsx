import Header from './components/Header.jsx';
import MainForm from './components/MainForm.jsx';
import Signup from './components/Signup.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext.jsx';

function App() {
  return (
    <UserProvider>
      <Header />
      <main>
      <Router>
        <Routes>
          <Route path="/" element={<MainForm />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      </main>
    </UserProvider>
  );
}

export default App;

