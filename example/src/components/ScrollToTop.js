import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// https://reacttraining.com/react-router/web/guides/scroll-restoration
const ScrollToTop = ({ cb, children, location: { pathname } }) => {
  useEffect(() => {
    const contentArea = document.querySelector('.content-area');
    contentArea.scrollTop = 0;
    cb && cb();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return children;
};

ScrollToTop.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default withRouter(ScrollToTop);
