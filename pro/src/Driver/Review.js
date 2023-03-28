import React from 'react';
import { PageHeader } from '@carbon/ibm-products/lib/components';
import { actionBarItems } from './elements/PageHeader';
import { DashboardEditor } from 'carbon-addons-iot-react';

import { text, array } from '@storybook/addon-knobs';
import 'carbon-addons-iot-react/css/carbon-addons-iot-react.css';

import Link from '@carbon/ibm-security/lib/components/Link';

import { mockDataItems } from './elements/DashBoard';


export const rev = () => (

  <>
    <div style={{ margin: '-2rem -2rem 0rem -2rem', paddingBlockEnd: '3rem' }}>

      <PageHeader
        actionBarItems={actionBarItems}
        title='DASHBOARODS' />
    </div>


    <DashboardEditor
      isTitleEditable={true}
      title={text('title', 'My dashboard')}
      getValidDataItems={() => mockDataItems}
      breakpointSwitcher={{ enabled: true }}
      headerBreadcrumbs={[
        <Link href="www.ibm.com">Dashboard library</Link>,
        <Link href="www.ibm.com">Favorites</Link>,
      ]}
      dataItems={mockDataItems}

      supportedCardTypes={array('supportedCardTypes', [
        'TIMESERIES',
        'SIMPLE_BAR',
        'GROUPED_BAR',
        'STACKED_BAR',
        'VALUE',
        'IMAGE',
        'TABLE',
        'CUSTOM',
        'LIST',

      ])}

    >

    </DashboardEditor>
  </>
);