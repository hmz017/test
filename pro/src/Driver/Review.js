import React from 'react';
import { DashboardEditor ,Column,Row,Button} from 'carbon-addons-iot-react';
import {  text, array } from '@storybook/addon-knobs';
import {Add16,Launch16} from '@carbon/icons-react';
import 'carbon-addons-iot-react/css/carbon-addons-iot-react.css';
import GettingStartedLayout from '@carbon/ibm-security/lib/components/GettingStartedLayout';
import { DescriptionModule,TitleBarModule } from '@carbon/ibm-security';
import Link from '@carbon/ibm-security/lib/components/Link';
import placeholder from './images/placeholder.svg';
import { PageHeader } from '@carbon/ibm-products/lib/components';

const mockDataItems = [
  {
    dataItemId: 'torque_max',
    dataSourceId: 'torque_max',
    label: 'Torque Max',
    aggregationMethod: 'max',
    aggregationMethods: [
      { id: 'none', text: 'None' },
      { id: 'last', text: 'Last' },
      { id: 'mean', text: 'Mean' },
      { id: 'max', text: 'Max' },
      { id: 'min', text: 'Min' },
    ],
    grain: 'hourly',
  },
  {
    dataItemId: 'torque_min',
    dataSourceId: 'torque_min',
    label: 'Torque Min',
    aggregationMethod: 'min',
    aggregationMethods: [
      { id: 'none', text: 'None' },
      { id: 'last', text: 'Last' },
      { id: 'mean', text: 'Mean' },
      { id: 'max', text: 'Max' },
      { id: 'min', text: 'Min' },
    ],
    grain: 'hourly',
  },
  {
    dataItemId: 'torque_mean',
    dataSourceId: 'torque_mean',
    label: 'Torque Mean',
    aggregationMethod: 'mean',
    aggregationMethods: [
      { id: 'none', text: 'None' },
      { id: 'last', text: 'Last' },
      { id: 'mean', text: 'Mean' },
      { id: 'max', text: 'Max' },
      { id: 'min', text: 'Min' },
    ],
    grain: 'hourly',
  },
  {
    dataItemId: 'torque',
    dataSourceId: 'torque',
    label: 'Torque',
    aggregationMethods: [
      { id: 'none', text: 'None' },
      { id: 'last', text: 'Last' },
      { id: 'mean', text: 'Mean' },
      { id: 'max', text: 'Max' },
      { id: 'min', text: 'Min' },
    ],
  },
  {
    dataItemId: 'temperature',
    dataSourceId: 'temperature',
    label: 'Temperature',
    aggregationMethods: [
      { id: 'none', text: 'None' },
      { id: 'last', text: 'Last' },
      { id: 'mean', text: 'Mean' },
      { id: 'max', text: 'Max' },
      { id: 'min', text: 'Min' },
    ],
  },
  {
    dataItemId: 'pressure',
    dataSourceId: 'pressure',
    label: 'Pressure',
    aggregationMethods: [
      { id: 'none', text: 'None' },
      { id: 'last', text: 'Last' },
      { id: 'mean', text: 'Mean' },
      { id: 'max', text: 'Max' },
      { id: 'min', text: 'Min' },
    ],
  },
  {
    dataItemId: 'firmware',
    dataItemType: 'DIMENSION',
    dataSourceId: 'firmware',
    label: 'firmware',
    aggregationMethods: [
      { id: 'none', text: 'None' },
      { id: 'last', text: 'Last' },
    ],
  },
  {
    dataItemId: 'manufacturer',
    dataItemType: 'DIMENSION',
    dataSourceId: 'manufacturer',
    label: 'manufacturer',
    aggregationMethods: [
      { id: 'none', text: 'None' },
      { id: 'last', text: 'Last' },
    ],
  },
  {
    dataItemId: 'v2pressure',
    dataSourceId: 'v2pressure',
    label: 'V2 Pressure',
    hasStreamingMetricEnabled: true,
  },
];



export const rev = () => (
  
  <>
  <PageHeader>
  <GettingStartedLayout className="security--theme--cg10">
    {({ getLayoutProps }) => {
      const {
        description,
        primaryButton,
        secondaryButton,
        tertiaryButton,
        illustration,
        additionalInfo,
      } = getLayoutProps();

      return (
        <>
         
            
            <DescriptionModule {...description}>
              {({ getLayoutProps }) => {
                return (
                  <>
                    <TitleBarModule title="Section title" />
                    <p {...getLayoutProps()}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer finibus tortor eget est ornare, a ultrices risus
                      tincidunt.
                    </p>
                  </>
                );
              }}
            </DescriptionModule>
            
            <Row style={{ marginBottom: '100px' }}>
              <Column>
                <Button {...primaryButton} kind="primary">
                  Button
                </Button>
              </Column>
              
              <Column >
              
                <Button
                  {...secondaryButton}
                  kind="ghost"
                  renderIcon={Add16}
                  style={{ marginLeft: '-16px' }}
                >
                  Ghost Button
                </Button>
                </Column>

                <Column lg={{ span: 5, offset: 1 }}>
            <img
              {...illustration}
              src={placeholder}
              alt="Getting started illustration"
            />
          </Column>
                
             
            </Row>
            
            <p {...additionalInfo}>
              To learn more, lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <Button {...tertiaryButton} kind="ghost" renderIcon={Launch16}>
              Ghost Button
            </Button>
          
          
        </>
      );
    }}
  </GettingStartedLayout>
  </PageHeader>


    <DashboardEditor
    
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