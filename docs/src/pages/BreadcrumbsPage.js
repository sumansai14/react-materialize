import React from 'react';
import Row from 'Row';
import Section from 'Section';
import Col from 'Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import BreadcrumbsCode from '!raw-loader!Breadcrumb';

const header = 'Breadcrumbs';
const desc = `Breadcrumbs are a good way to display your current location.
  This is usually used when you have multiple layers of content.`;

const BreadcrumbsPage = () => (
  <Row>
    <Col s={12}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4>Basic</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/Breadcrumbs.js')} />
      </Section>

      <Section>
        <PropTable header={header} component={BreadcrumbsCode} />
      </Section>
    </Col>
  </Row>
);

export default BreadcrumbsPage;
