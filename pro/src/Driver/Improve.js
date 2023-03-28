import React from 'react';
import { PageHeader } from '@carbon/ibm-products/lib/components';

import { Row, Column, Grid } from 'carbon-components-react';

import { DescriptionModule, TitleBarModule } from '@carbon/ibm-security';

import { ResourceList, List, Tag, OverflowMenu, OverflowMenuItem } from 'carbon-addons-iot-react';

import { select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Edit16 } from '@carbon/icons-react';

import { actionBarItems } from './elements/PageHeader';
import { resourceData } from './elements/imporveData';
import { sampleHierarchy } from './elements/makeData';


export const Imp = () => {


  return (
    <>
      <div style={{ margin: '-2rem -2rem 0rem -2rem', paddingBlockEnd: '3rem' }}>

        <PageHeader
          actionBarItems={actionBarItems}
          title='IMPROVE' />
      </div>
      <Grid>

        <Row>


          <Column style={{ paddingRight: '0rem', paddingLeft: '0rem', paddingBlockStart: '3rem' }}>
            <DescriptionModule>
              {({ getLayoutProps }) => (

                <>
                  <div style={{ color: 'white' }}>
                    <TitleBarModule title="the power of improving" />

                    <p {...getLayoutProps()}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                      finibus tortor eget est ornare, a ultrices risus tincidunt.
                      Suspendisse condimentum mauris at ornare tempor. Phasellus a arcu
                      ante. Morbi vitae ultrices quam, eget eleifend magna. Morbi quis
                      porttitor ex, in elementum tellus. In eget rutrum eros, eu scelerisque
                      risus. Phasellus vel pretium lorem, ut laoreet sapien. Cras ac purus
                      vitae velit efficitur iaculis. Nunc.
                    </p>
                  </div>
                </>
              )}
            </DescriptionModule>
          </Column>
        </Row>

        <Row>
          <Column style={{ paddingRight: '0rem', paddingLeft: '0rem', paddingBlockStart: '6rem' }}>
            <ResourceList
              design={select('Resource list design', ['normal', 'inline'], 'normal')}
              data={resourceData}
              customAction={{
                onClick: action('customAction.onClick'),
                label: 'Configure',
                icon: Edit16,
              }}
            />
          </Column>
          <Column lg={14}>


            <div style={{ width: 1000 }}>
              <List
                title='NY Yankees'
                items={Object.entries(sampleHierarchy.MLB['American League']['New York Yankees']).map(
                  ([key, value]) => ({
                    id: key,
                    content: {
                      value: key,
                      secondaryValue: value,
                      tags: [
                        <Tag type="blue" title="descriptor" key="tag1">
                          default
                        </Tag>,
                      ],
                      rowActions: () =>
                        <OverflowMenu
                          size="sm"
                          flipped={document.dir !== 'rtl'}
                          key={`${key}-list-item-button-${value}`}
                        >
                          <OverflowMenuItem itemText="Edit" />
                          <OverflowMenuItem itemText="Add" />
                          <OverflowMenuItem itemText="Delete" hasDivider isDelete />
                        </OverflowMenu>,
                    },
                  })
                )}
                isLargeRow={boolean('isLargeRow', false)}
                isLoading={boolean('isLoading', false)}
                isVirtualList={boolean('isVirtualList', false)}
              />
            </div>
          </Column>
        </Row>

      </Grid>

    </>

  );
};
