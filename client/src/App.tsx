import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BetPage from './pages/BetPage/BetPage';
import Header from './components/Header/Header';
import rootReducer from './store';
import { devToolsEnhancer } from 'redux-devtools-extension';
import GraphPage from './pages/GraphPage/GraphPage';

const store = createStore(
  rootReducer,
  devToolsEnhancer({})
);

const MaldivesApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={BetPage} />
          <Route exact path='/graphs' component={GraphPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default MaldivesApp;
