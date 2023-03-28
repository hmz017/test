import React, { Fragment } from 'react';

import { PageHeader } from '@carbon/ibm-products';
import { actionBarItems } from './elements/PageHeader';

import { Button, ButtonSet } from 'carbon-components-react';
import { Edit16, TrashCan16, CopyFile20 } from '@carbon/icons-react';

import { Column, Grid, Row } from 'carbon-addons-iot-react';
import DashboardGrid from 'carbon-addons-iot-react/lib/components/Dashboard/DashboardGrid';

import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Cards } from './elements/cardsData';



export const Page1 = () => {
  const commonGridProps = {
    onBreakpointChange: action('onBreakpointChange'),
    onLayoutChange: action('onLayoutChange'),
  };
  return (

    <>

      <div style={{ margin: '-2rem -2rem 0rem -2rem' }}>

        <PageHeader title='Overview'
          {...{ actionBarItems }} />
      </div>

      <Grid>

        <Row>

          <Column>
            <ButtonSet>
              <Button kind='tertiary' renderIcon={Edit16}>
                Edit
              </Button>
              <Button kind='tertiary' renderIcon={TrashCan16}>
                Delete
              </Button>
              <Button kind='tertiary' renderIcon={CopyFile20}>
                Clone
              </Button>
            </ButtonSet>
          </Column>

        </Row>

        <Row>

          <Column>

            <Fragment>

              <DashboardGrid {...commonGridProps} isEditable={boolean('isEditable', true)}   >
                {Cards}
              </DashboardGrid>

            </Fragment>

          </Column>

        </Row>

      </Grid>
    </>
  );
};