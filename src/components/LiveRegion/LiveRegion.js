import {
  useEffect,
  useState
} from 'react';

function LiveRegion(props) {
  const {loc} = props;
  const [vis, setVis] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVis(true);
    }, 1000);
  }, []);

  return (
    <div
      aria-live="polite"
      className="vh"
    >
      {vis &&
        <p>{loc}</p>
      }
    </div>
  );
}

export default LiveRegion;
