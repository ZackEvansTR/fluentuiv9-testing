import './AccordionExample.css';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  //Link,
} from '@fluentui/react-components';
import {accordionData as data} from '../../data';
import MyCustomList from '../MyCustomList/MyCustomList';
import Wrapper from '../Wrapper/Wrapper';
import {v4 as uuidv4} from 'uuid';

function AccordionExample() {
  return (
    <Wrapper heading="Accordion">
      {data.map((item) => (
        <Accordion
          collapsible 
          multiple
          key={uuidv4()}
        >
          <AccordionItem>
            <AccordionHeader as="h2">
              {item.label}
              <svg
                aria-hidden="true"
                width="24" height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/>
              </svg>
            </AccordionHeader>
            <AccordionPanel>
              <MyCustomList data={item.children}/>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Wrapper>
  );
}

export default AccordionExample;
