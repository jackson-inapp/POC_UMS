import React from 'react';
import { connect } from 'react-redux';
import Loader from './components/loader'

import Routes from './routes';

function App(props) {
  console.log(props)
  return (
    <>
      <Loader loading={props.loader.loading} />
      <Routes />
    </>
  );
}

const mapStateToProps = ( state ) =>({
  loader: state.loader
})

export default connect(mapStateToProps)(App);
