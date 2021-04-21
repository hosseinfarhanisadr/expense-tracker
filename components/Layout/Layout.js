import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto px-4 sm:px-0">
      <header>Header</header>
      <main className="flex-grow" role="main">
        {children}
      </main>
      <footer>footer</footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
