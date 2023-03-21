import React,{useRef,useState} from 'react';

import { PageHeader, Toolbar, ToolbarGroup, ToolbarButton,SidePanel } from '@carbon/ibm-products';
import { actionBarItems } from '../Main/elements/PageHeader';
import { Share16, Upload16, Save16, Printer16, Undo16, Redo16, ZoomIn16, ZoomOut16, Minimize20, AlignHorizontalCenter16, Ruler20, Pin16, CopyFile16,User20, Wikis20, Debug20  } from '@carbon/icons-react';



import Elk from "./Elk";
import { Button, Column, Row,Grid } from 'carbon-components-react';
import { ScrollAnimations } from "@carbon/ibmdotcom-react/es/components/ScrollAnimations";

const size = 48;

const nodeData = [
  { id: "a", height: size, width: size },
  { id: "b", height: size, width: size },
  { id: "c", height: size, width: size },
  { id: "d", height: size, width: size },
  { id: "e", height: size, width: size },
  { id: "f", height: size, width: size },
  { id: "g", height: size, width: size },
  { id: "h", height: size, width: size }
];

const linkData = [
  { id: "1", source: "a", target: "b" },
  { id: "2", source: "c", target: "b" },
  { id: "3", source: "d", target: "e" },
  { id: "4", source: "d", target: "b" },
  { id: "5", source: "b", target: "f" },
  { id: "6", source: "g", target: "h" },
  { id: "7", source: "h", target: "f" }
];

export const OKR2 = () => {
  const refMain = useRef(null);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const openPanel = () => {
        setOpen(true);
        
      };
      const openmodel = () => {
        setOpen1(true);
        
      };
      const pageActions = [
        {
          key: 'secondary',
          kind: 'secondary',
          label: 'slideover',
          onClick: openPanel,
        },
        
      ];
      
  return (
    <>
    <h1>DIAGRAMS</h1>
      <PageHeader     
      

 />
    
      <SidePanel
  includeOverlay
  className="test"
  open={open}
  onRequestClose={() => setOpen(false)}
  title="slideover"
>
  Side
</SidePanel >
 <Grid>
  <Row>
  <Column>
    <Button
    
    onClick={openPanel}>slideOOver</Button>
      </Column>
<Column>
        <Toolbar>
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
     
<Column>

<div style={{borderTop: "1px solid #ccc" }}>
      <Elk nodes={nodeData} links={linkData} layout="layered"  />
    </div>
    </Column>
  </Row>
  <Row>
    
  </Row>
  </Grid>
  
      

    </>
  );
};