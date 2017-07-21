import React from 'react';
import Row from 'Row';
import Col from 'Col';
import Section from 'Section';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Code from '!raw-loader!Chip';

const header = 'Chip';
const desc = `Chips can be used to represent small blocks of information.
  They are most commonly used either for contacts or for tags.`;

const ChipsPage = () => (
  <Row>
    <Col s={12}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4>Basic</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/Chips.js')} />
      </Section>

      <Section>
        <PropTable header={header} component={Code} />
      </Section>
    </Col>
  </Row>
);

export default ChipsPage;
