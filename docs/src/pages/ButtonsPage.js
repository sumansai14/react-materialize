import React from 'react';
import Row from 'Row';
import Col from 'Col';
import Section from 'Section';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import ButtonCode from '!raw-loader!Button';

const header = 'Buttons';
const desc = `There are 3 main button types described in material design.
  The raised button is a standard button that signify actions and seek to
  give depth to a mostly flat page. The floating circular action button
  is meant for very important functions. Flat buttons are usually used
  within elements that already have depth like cards or modals.`;

const ButtonsPage = () => (
  <Row>
    <Col s={12}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4>Raised</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/RaisedButton.js')} />
      </Section>

      <Section>
        <h4>Floating</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/FloatingButton.js')} />
      </Section>

      <Section>
        <h4>Fixed Action Button</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/FixedActionButton.js')} />
      </Section>

      <Section>
        <h4>Horizontal FAB</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/HorizontalFAB.js')} />
      </Section>

      <Section>
        <h4>Button as Link</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/ButtonAsLink.js')} />
      </Section>

      <Section>
        <PropTable header={header} component={ButtonCode} />
      </Section>
    </Col>
  </Row>
);

export default ButtonsPage;
