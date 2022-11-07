import React from 'react';
import './RadioGroupExample.css';
import {
  Label,
  RadioGroup,
  Radio
} from '@fluentui/react-components';
import Wrapper from '../Wrapper/Wrapper';
import {radioData as data} from '../../data';
import {v4 as uuidv4} from 'uuid';

function RadioGroupExample() {
  const id = uuidv4();
  return (
    <Wrapper heading="Radio Group">
      {data.map((item) => (
        <React.Fragment key={uuidv4()}>
          <Label id={id}>
            {item.label}
          </Label>
          <RadioGroup
            aria-labelledby={id}
            layout="horiztonal"
          >
            {item.children.map((child) => (
              <Radio
                key={uuidv4()}
                label={child.label}
                value={child.value}
              />
            ))}
          </RadioGroup>
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

export default RadioGroupExample;
