import './MyCustomList.css';
import {Link} from '@fluentui/react-components';
import {v4 as uuidv4} from 'uuid';

function MyCustomList(props) {
  const {data} = props;
  return (
    <ul className="cb-MyCustomList">
      {data.map((child) => (
        <li
          className="cb-MyCustomList-item"
          key={uuidv4()}
        >
          <Link href={child.href}>
            {child.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MyCustomList;
