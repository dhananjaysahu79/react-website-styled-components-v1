import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import FormSignup from './components/FormSignup/FormSignup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/dwireless' exact component={Home} />
        <Route path='/dwireless/services' component={Services} />
        <Route path='/dwireless/about' component={Products} />
        <Route path='/dwireless/sign-up' component={SignUp} />
        <Route path='/dwireless/FormSignup' component={FormSignup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
