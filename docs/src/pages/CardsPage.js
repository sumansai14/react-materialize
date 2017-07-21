import React from 'react';
import Row from 'Row';
import Col from 'Col';
import Section from 'Section';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import CardCode from '!raw-loader!Card';

const header = 'Cards';
const desc = `Cards are a convenient means of displaying content composed
  of different types of objects. They’re also well-suited for presenting
  similar objects whose size or supported actions can vary considerably,
  like photos with captions of variable length.`;

const CardsPage = () => (
  <Row>
    <Col s={12}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4>Basic Card</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CardSimple.js')} />
      </Section>

      <Section>
        <h4>Image Card</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CardImage.js')} />
      </Section>

      <Section>
        <h4>Card Reveal</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CardReveal.js')} />
      </Section>

      <Section>
        <h4>Card Reveal</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CardReveal.js')} />
      </Section>

      <Section>
        <h4>Card Panel</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/CardPanel.js')} />
      </Section>

      <Section>
        <PropTable header={header} component={CardCode} />
      </Section>
    </Col>
  </Row>
);

export default CardsPage;
