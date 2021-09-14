import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BetPage from './pages/BetPage/BetPage';
import Header from './components/Header/Header';
import rootReducer from './store';
import { devToolsEnhancer } from 'redux-devtools-extension';
import GraphPage from './pages/GraphPage/GraphPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const store = createStore(
  rootReducer,
  devToolsEnhancer({})
);

const MaldivesApp = () => {

  // Just temporary, no panic please
  useEffect(() => {
    if (!localStorage.getItem('secret')) {
      const password = window.prompt('Lösenord din lilla lurkus');
      if (password === 'topsecret') {
        localStorage.setItem('secret', 'very-good-authentication');
      }
    }
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={BetPage} />
          <Route exact path='/graphs' component={GraphPage} />
        </Switch>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      </Router>
    </Provider>
  );
}

export default MaldivesApp;
