import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getUserAuth } from './actions';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/home'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  getUserAuth: () => dispatch(getUserAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
