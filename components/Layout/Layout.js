import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto px-4 sm:px-0">
      <Header />
      <main className="flex-grow" role="main">
        {children}
      </main>
      <Footer />
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
