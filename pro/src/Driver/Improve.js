import React from 'react';
import { PageHeader } from '@carbon/ibm-products/lib/components';
import { actionBarItems } from '../Main/elements/PageHeader';
import { Row, Column, Grid } from 'carbon-components-react';
import { DescriptionModule,TitleBarModule } from '@carbon/ibm-security';

import { ResourceList } from 'carbon-addons-iot-react';
import { select} from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';
import { Edit16 } from '@carbon/icons-react';

 
const resourceData = [
  {
    id: 'row-0',
    title: 'Item A',
    description:
      'Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed.',
  },
  {
    id: 'row-1',
    title: 'Item B',
    description:
      'Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed.',
  },
  {
    id: 'row-2',
    title: 'Item C',
    description:
      'Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed. Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed.Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed.Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed.Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed.Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed.Lorem ipsun dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed.',
  },
];
 
export const Imp = () => {


  return (
    <>
    <Row>
      <PageHeader 
              actionBarItems={actionBarItems}     
                  actionBarOverflowAriaLabel="Overflow Menu"

 />
    <DescriptionModule>
    {({ getLayoutProps }) => (
      <>
        <TitleBarModule title="SECTION TITLE" />

        <p {...getLayoutProps()}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          finibus tortor eget est ornare, a ultrices risus tincidunt.
          Suspendisse condimentum mauris at ornare tempor. Phasellus a arcu
          ante. Morbi vitae ultrices quam, eget eleifend magna. Morbi quis
          porttitor ex, in elementum tellus. In eget rutrum eros, eu scelerisque
          risus. Phasellus vel pretium lorem, ut laoreet sapien. Cras ac purus
          vitae velit efficitur iaculis. Nunc.
        </p>
      </>
    )}
  </DescriptionModule>
  </Row>
  <div style={{borderTop: "40px solid " }}>
  <Row>
 <ResourceList
      design={select('Resource list design', ['normal', 'inline'], 'normal')}
      data={resourceData}
    customAction={{
      onClick: action('customAction.onClick'),
      label: 'Configure',
      icon: Edit16,
    }}
  />
  </Row>
  </div>
     </>

  );
};
