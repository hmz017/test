import React,{Fragment} from 'react';
import { PageHeader} from '@carbon/ibm-products';
import { Button,ButtonSet } from 'carbon-components-react';
import { Edit16,Add16, WordCloud20, Sun32 } from '@carbon/icons-react';
import './_sample-page.scss';
import "@carbon/charts/styles.css";
import { Card, Column, Grid, Row } from 'carbon-addons-iot-react';
import { text, select, boolean, object, number } from '@storybook/addon-knobs';
import { CARD_SIZES } from 'carbon-addons-iot-react/lib/constants/LayoutConstants';
import { action } from '@storybook/addon-actions';
import '@carbon/ibmdotcom-styles/scss/components/scroll-into-view/_scroll-into-view.scss';
import DashboardGrid from 'carbon-addons-iot-react/lib/components/Dashboard/DashboardGrid';
import PieChartCard from 'carbon-addons-iot-react/lib/components/PieChartCard/PieChartCard';

import ValueCard from 'carbon-addons-iot-react/lib/components/ValueCard/ValueCard';

import { actionBarItems } from '../elements/PageHeader';

  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  const chartDataExample = [
    {
      group: '2V2N 9KYPM',
      category: 'A',
      value: 1,
    },
    {
      group: 'L22I P66EP L22I P66EP',
      category: 'B',
      value: 10,
    },
    {
      group: 'JQAI 2M4L1',
      category: 'C',
      value: 20,
    },
    {
      group: 'J9DZ F37AP',
      category: 'D',
      value: 50,
    },
    {
      group: 'YEL48 Q6XK YEL48',
      category: 'E',
      value: 15,
    },
    {
      group: 'Misc',
      category: 'F',
      value: 40,
    },
  ];
  const data= [
          {
            group: 'Install',
            category:'Install',
            value: 100,
          },
          {
            group: 'Limited users',
            value: 200,
          },
          {
            group: 'Base users',
            value: 300,
          },
          {
            group: 'Premium users',
            value: 200,
          },
          {
            group: 'Cron tasks',
            value: 100,
          },
          {
            group: 'Reports',
            value: 150,
          },
        ];
  const groupDataSourceId = select('groupDataSourceId', ['category', 'group'], 'category');
  const chartData = object('chartData', chartDataExample);
  const Meterdata = object('data', data);
const Cards =[
  
  <Card
  size={CARD_SIZES.MEDIUM}
  breakpoint={breakpoint}
  title='sparkline'
  id="sparkline"
  availableActions={{
    "range": false,
    "expand": false,
    "edit": false,
    "clone": false,
    "delete": false
  }}
  type='SPARKLINE_CHART'
  data={[
    {
      "group": "Dataset 1",
      "date": 1558453860000,
      "value": 5
    },
    {
      "group": "Dataset 1",
      "date": 1558453920000,
      "value": 5
    },
    {
      "group": "Dataset 1",
      "date": 1558453980000,
      "value": 6
    },
    {
      "group": "Dataset 1",
      "date": 1558454040000,
      "value": 2
    },
    {
      "group": "Dataset 1",
      "date": 1558454100000,
      "value": 3
    },
    {
      "group": "Dataset 1",
      "date": 1558454160000,
      "value": 6
    },
    {
      "group": "Dataset 1",
      "date": 1558454280000,
      "value": 2
    },
    {
      "group": "Dataset 1",
      "date": 1558454340000,
      "value": 6
    },
    {
      "group": "Dataset 1",
      "date": 1558454460000,
      "value": 3
    },
    {
      "group": "Dataset 1",
      "date": 1558454520000,
      "value": 2
    },
    {
      "group": "Dataset 1",
      "date": 1558454580000,
      "value": 4
    },
    {
      "group": "Dataset 1",
      "date": 1558454640000,
      "value": 3
    },
    {
      "group": "Dataset 1",
      "date": 1558454700000,
      "value": 4
    },
    {
      "group": "Dataset 1",
      "date": 1558454760000,
      "value": 2
    },
    {
      "group": "Dataset 1",
      "date": 1558454820000,
      "value": 4
    },
    {
      "group": "Dataset 1",
      "date": 1558454880000,
      "value": 1
    },
    {
      "group": "Dataset 1",
      "date": 1558454940000,
      "value": 1
    },
    {
      "group": "Dataset 1",
      "date": 1558455000000,
      "value": 3
    },
    {
      "group": "Dataset 1",
      "date": 1558455060000,
      "value": 2
    }
  ]}
  content={{
    xLabel: text('content.xLabel', 'xlabel prop'),
    yLabel: text('content.yLabel', 'y label prop'),
    xProperty: text('content.xProperty', 'date'),
    yProperty: text('content.yProperty', 'value'),
    color: {
      pairing: {
        option: 4,
      },
      gradient: {
        enabled: true,
      },
    },
    listContent: object('content.listContent', [
      { label: 'Target', value: 1000 },
      { label: 'Mean', value: 756 },
      { label: 'Peak', value: 1045 },
    ]),
  }}
  ></Card>,
  
  
  
      <PieChartCard
      availableActions={{ expand: false  }}
      
      content={{
        groupDataSourceId,
        legendPosition: select('legendPosition', ['bottom', 'top'], 'bottom'),
      }}
      id="basicCardStory"
    
      size={CARD_SIZES.MEDIUM}
      title='Schools'
      testID="basicCardStoryTest"
      values={chartData}
    />,
    <ValueCard
        title={text('title', 'Status')}
        id="facilitycard"
        content={{
          attributes: object('content.attributes', [
            {
              dataSourceId: 'status',
              label: 'Status',
            },
            {
              dataSourceId: 'comfortLevel',
              label: 'Comfort level',
            },
            {
              dataSourceId: 'occupancy',
              label: 'Occupancy',
            },
            {
              dataSourceId: 'humidity',
              label: 'Humidity',
            },
          ]),
        }}
        breakpoint={breakpoint}
        size={CARD_SIZES.MEDIUM}
        values={{
          status: text('status', 'Good'),
          comfortLevel: text('comfortLevel', 'Healthy'),
          occupancy: text('occupancy', 'None'),
          humidity: text('humidity', 'Unbearable'),
        }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
        onAttributeClick={action('onAttributeClick')}
      />,
     
<Card
        title= 'Card with render prop'
        id="facilitycard-basic"
        size={CARD_SIZES.MEDIUM}
        breakpoint={breakpoint}
        availableActions={object('availableActions', {
          range: false,
          expand: false,
          edit: false,
          clone: false,
          delete: false,
        })}
        onCardAction={action('onCardAction')}
        onFocus={action('onFocus')}
        onBlur={action('onBlur')}
        onClick={action('onClick')}
        tabIndex={0}
        footerContent={() => (
          <Button size="sm" kind="ghost">
            Footer Content
          </Button>
        )}
        type={text('type', 'METER_CHART')}
data={Meterdata}
        content={{
          peak: number('content.peak', 2000),
          meterTotal: number('content.meterTotal', 1000),
          meterUnit: text('content.meterUnit', 'AppPoints'),
          totalFormatter: (total) => text('content.totalFormatter', `${total} custom formatter`),
          color: {
            pairing: {
              option: 5,
            },
          },
          groupDataSourceId,
          legendPosition: select('legendPosition', ['bottom', 'top'], 'bottom'),
          status: object('content.status', {
            success: [0, 300],
            warning: [300, 900],
            danger: [900, 2000],
          }),
        }}
      />
        
      ,
      
  ]
export const Page1 = () => {
  const commonGridProps = {
    onBreakpointChange: action('onBreakpointChange'),
    onLayoutChange: action('onLayoutChange'),
  };
  return (
    
    <Grid>
      <Row>

      <PageHeader title='OVERVIEW'     
      {...{actionBarItems}}

 />
 </Row>
<Row>
  <Column>
<ButtonSet >
          <Button kind='ghost' renderIcon={Add16} >
        Add 1
      </Button>
      <Button kind='ghost' renderIcon={Edit16}>
        Edit 2
      </Button>
      <Button kind='ghost' renderIcon={WordCloud20}>
        Delete 3
      </Button>
      <Button kind='ghost' renderIcon={Sun32}>
        Clone 4
      </Button>
</ButtonSet>
</Column>
      </Row>

      <Row>
        <Column>
      <Fragment>
        <DashboardGrid {...commonGridProps} isEditable={boolean('isEditable', true)}>
          {Cards}
        </DashboardGrid>
    </Fragment>
    </Column>
    </Row>

    </Grid>
  );
};