
import Header  from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';
  return (
    <div>
      {(!isLoginPage && !isSignUpPage) && <Header />}
        <Layout/>
      {(!isLoginPage && !isSignUpPage) && <Footer />}
    </div>
  );
};

export default App;