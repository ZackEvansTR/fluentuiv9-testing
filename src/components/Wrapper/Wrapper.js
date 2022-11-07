import './Wrapper.css';
import {
  useEffect,
  useRef
} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {update} from '../../features/location/locationSlice';

function Wrapper(props) {
  const {children, heading} = props;
  const dispatch = useDispatch();
  const headingRef = useRef(null);
  const {key} = useLocation();
  
  useEffect(() => {
    if (heading !== process.env.REACT_APP_BASE_TITLE) {
      dispatch(update(`${heading} | ${process.env.REACT_APP_BASE_TITLE}`));
    }
    if(key !== 'default') headingRef.current.focus()
  }, [dispatch, heading, key]);
  
  return (
    <main className='wrapper'>
      <h1 ref={headingRef} tabIndex="-1">{heading}</h1>
      {children}
    </main>
  );
}

export default Wrapper;
