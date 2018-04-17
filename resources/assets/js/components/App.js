import React from 'react';
// import PropTypes from 'prop-types';

// import Header from './components/sections/Header';
// import Footer from './components/sections/Footer';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content container">
        {children}
      </div>
      <hr />
      <Footer />
    </div>
  );
};

// App.propTypes = {
//   children: PropTypes.node,
// };

export default App;