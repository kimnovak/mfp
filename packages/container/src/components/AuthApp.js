import { mount } from 'auth/Auth';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      onNavigate: ({pathname: nextPathname}) => {
        if (nextPathname === history.location.pathname) {
          return;
        }
        history.push(nextPathname);
      },
      initialPath: history.location.pathname
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
