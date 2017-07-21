import React from 'react';
import Row from 'Row';
import Col from 'Col';
import Section from 'Section';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import Samples from './Samples';
import badgeCollections from '../../../examples/BadgeCollections';
import badgeDropdowns from '../../../examples/BadgeDropdowns';
import badgeNavbar from '../../../examples/BadgeNavbar';
import BadgesCode from '!raw-loader!Badge';

const header = 'Badges';
const desc = `Badges can notify you that there are new or unread
  messages or notifications. Add the 'newIcon' prop to the badge
  to give it the background.`;

const BadgesPage = () => (
  <Row>
    <Col s={12}>
      <Section>
        <p className='caption'>{desc}</p>
        <h4>Collection</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/BadgeCollections.js')} />
      </Section>

      <Section>
        <h4>Badges in Dropdown</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/BadgeDropdowns.js')} />
      </Section>

      <Section>
        <h4>Badges in Navbar</h4>
        <ReactPlayground code={require('!raw-loader!../../../examples/BadgeNavbar.js')} />
      </Section>

      <Section>
        <PropTable header={header} component={BadgesCode} />
      </Section>
    </Col>
  </Row>
);

export default BadgesPage;
