import React, { Fragment } from 'react';

import { PageHeader } from '@carbon/ibm-products';
import {  Toolbar, ToolbarGroup, ToolbarButton } from '@carbon/ibm-products';

import { Share16, Upload16, Save16, Printer16, Undo16, Redo16, ZoomIn16, ZoomOut16, Minimize20, AlignHorizontalCenter16, Ruler20, Pin16, CopyFile16,Eyedropper24,Launch16,Idea16,Rocket32} from '@carbon/icons-react';
import {options,aceOptions,untypedOptions} from './elements/options';

import {IdeFilter} from '@carbon/ibm-cloud-cognitive-cdai/lib/components/IdeFilter/index';

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
          <div style={{ margin: '0rem -2rem', paddingBlockEnd: '3rem' }}>

<PageHeader >


<Column >

<Toolbar>

  <ToolbarGroup>
<IdeFilter 

options={options}
placeholderText="Search for assets, people, tags or types..."
// searchIcon={CustomIcon}
>
  
</IdeFilter>
</ToolbarGroup>

  <ToolbarGroup>
                <ToolbarButton iconDescription="save" renderIcon={Save16}>
                </ToolbarButton>
                <ToolbarButton iconDescription="share" renderIcon={Share16}>
                </ToolbarButton>
                <ToolbarButton iconDescription="upload" renderIcon={Upload16}>
                </ToolbarButton>
                <ToolbarButton iconDescription="print" renderIcon={Printer16}>
                </ToolbarButton>
                </ToolbarGroup>

                <ToolbarGroup>
                <ToolbarButton iconDescription="undo" renderIcon={Undo16}>
                </ToolbarButton>
                <ToolbarButton iconDescription="redo" renderIcon={Redo16}>
                </ToolbarButton>
                <ToolbarButton iconDescription="zoomIn" renderIcon={ZoomIn16}>
                </ToolbarButton>
                <ToolbarButton iconDescription="ZoomOut" renderIcon={ZoomOut16}>
                </ToolbarButton>
                <ToolbarButton iconDescription="Minimize" renderIcon={Minimize20}>
                </ToolbarButton>
                <ToolbarButton iconDescription="Align horizontal cente" renderIcon={AlignHorizontalCenter16}>
                </ToolbarButton>
                </ToolbarGroup>

                <ToolbarGroup>
                <ToolbarButton iconDescription="Ruler" renderIcon={Ruler20}>
                </ToolbarButton>
                <ToolbarButton iconDescription="Pin" renderIcon={Pin16}>
                </ToolbarButton>
                <ToolbarButton iconDescription='Copy file' renderIcon={CopyFile16}>
                </ToolbarButton>
                </ToolbarGroup>
          
            </Toolbar>
     
            </Column>
</PageHeader>
</div>
<Row style={{paddingTop:'2rem'}}>
              <Column lg={1} >
  <ButtonSet>
    <Button kind='ghost' renderIcon={Edit16}>
      Edit
    </Button>
    <Button kind='ghost' renderIcon={TrashCan16}>
      Delete
    </Button>
    <Button kind='ghost' renderIcon={CopyFile20}>
      Clone
    </Button>
  </ButtonSet>
  </Column>


      


       

              <DashboardGrid {...commonGridProps} isEditable={boolean('isEditable', true)}   >
                {Cards}
              </DashboardGrid>


           
              </Row>

      
    </>
  );
};