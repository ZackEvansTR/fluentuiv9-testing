import React from 'react';
import './SelectExample.css';
import {
  Select
} from '@fluentui/react-components/unstable';
import Wrapper from '../Wrapper/Wrapper';
import {selectData as data} from '../../data';
import {v4 as uuidv4} from 'uuid';

function SelectExample() {
  const id = uuidv4();
  return (
    <Wrapper heading="Select">
      {data.map((item) => (
        <React.Fragment key={uuidv4()}>
          <label htmlFor={id}>
            {item.label}
          </label>
          <Select id={id}>
            {item.children.map((child) => (
              <option key={uuidv4()}>
                {child.label}
              </option>
            ))}
          </Select>
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

export default SelectExample;
