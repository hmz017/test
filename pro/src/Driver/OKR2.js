import React, { useRef, useState } from 'react';
import { PageHeader, Toolbar, ToolbarGroup, ToolbarButton, SidePanel } from '@carbon/ibm-products';
import { Column, Row, Grid } from 'carbon-components-react';

import { Share16, Upload16, Save16, Printer16, Undo16, Redo16, ZoomIn16, ZoomOut16, Minimize20, AlignHorizontalCenter16, Ruler20, Pin16, CopyFile16, User20, Wikis20, Debug20 } from '@carbon/icons-react';
import { TreeChart, AlluvialChart } from "@carbon/charts-react";
import { ScrollAnimations } from '@carbon/ibmdotcom-react';
import "@carbon/charts/styles.css";
// import './sty.scss';

import ProgrammaticStatic from '@carbon/charts-react/diagrams/CardNode';
import CardNode, { CardNodeColumn, CardNodeTitle, CardNodeSubtitle } from '@carbon/charts-react/diagrams/CardNode';
import Edge from '@carbon/charts-react/diagrams/Edge/Edge';
import ShapeNode from '@carbon/charts-react/diagrams/ShapeNode/ShapeNode';
import { buildElbowPathString } from '@carbon/charts/components/diagrams/buildPaths';



import '@carbon/ibmdotcom-styles/scss/components/scroll-into-view/_scroll-into-view.scss';
import { data3, options3, data1, options1 } from './elements/chartsData';
import Elk from "./elements/Elk";








const nodeHeight = 64;
const nodeWidth = 200;
const ShapeNodeSize = 64;
const nodeData1 = [
  { id: 'a', x: 0, y: 16, icon: <User20 />, nodeWidth, nodeHeight },
  { id: 'b', x: 250, y: 16, icon: <Wikis20 />, nodeWidth, nodeHeight },
  {
    id: 'c',
    x: 600,
    y: 200,
    icon: <Debug20 />,
    ShapeNode: true,
    nodeWidth: ShapeNodeSize,
    nodeHeight: ShapeNodeSize,
  },
  { id: 'd', x: 0, y: 150, icon: <Wikis20 />, nodeWidth, nodeHeight },
];

const edgeData = [
  { source: 'a', target: 'b', variant: 'dash-md' },
  {
    source: 'c',
    target: 'b',
    path: (source, target) => buildElbowPathString(source, target),
  },
  {
    source: 'd',
    target: 'c',
    path: (source, target) => buildElbowPathString(source, target),
    variant: 'tunnel',
  },
];

const edgeMapped = edgeData.map((link) => {
  const sourceNode = nodeData1.find((node) => node.id === link.source);
  const targetNode = nodeData1.find((node) => node.id === link.target);

  return {
    ...link,
    source: {
      x: sourceNode.x + sourceNode.nodeWidth / 2,
      y: sourceNode.y + sourceNode.nodeHeight / 2,
    },
    target: {
      x: targetNode.x + targetNode.nodeWidth / 2,
      y: targetNode.y + targetNode.nodeHeight / 2,
    },
  };
});

const nodes = nodeData1.map((node, i) => (
  <foreignObject
    style={{ overflow: 'visible' }}
    key={`node_${i}`}
    transform={`translate(${node.x}, ${node.y})`}
    height={node.nodeHeight}
    width={node.nodeWidth}>
    {node.ShapeNode ? (
      <ShapeNode
        onClick={() => { }}
        title={'first'}
        size={ShapeNodeSize}
        description={'Description'}
        renderIcon={node.icon}
      />
    ) : (
      <CardNode onClick={() => { }}>
        <CardNodeColumn>{node.icon}</CardNodeColumn>

        <CardNodeColumn>
          <CardNodeTitle>Title</CardNodeTitle>
          <CardNodeSubtitle>Description</CardNodeSubtitle>
        </CardNodeColumn>
      </CardNode>

    )}
  </foreignObject>
));
const edges = edgeMapped.map((edge, i) => (
  <Edge
    key={`link_${i}`}
    source={edge.source}
    target={edge.target}
    path={edge.path && edge.path(edge.source, edge.target)}
    variant={edge.variant}
  />
));





const size = 60;

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
  const openPanel = () => {
    setOpen(true);
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
      <div style={{ margin: '-2rem -2rem 0rem -2rem', paddingBlockEnd: '3rem' }}>

        <PageHeader
          title='DIAGRAMS'
          {...{ pageActions }}>

          <div style={{ margin: '1rem -1rem -1rem -1rem' }}>

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
          </div>
        </PageHeader>


      </div>
      <ScrollAnimations selectorTargets={'div'} animation={'fade'} keepAnimations={true}>

        <SidePanel
          includeOverlay
          className="test"
          open={open}
          onRequestClose={() => setOpen(false)}
          title="slideover">
        </SidePanel >

        <Grid>

          <Row>
            <Column>
              <main className="sample-page__main" ref={refMain}>
                <TreeChart data={data3} options={options3} >
                </TreeChart>
              </main>
            </Column>
          </Row>


          <Row>
            <Column>
              <div style={{ borderTop: "1px solid #ccc", height: '700px', backgroundColor: 'skyblue' }}>
                <h1>NODES</h1>
                <div style={{ paddingLeft: '15rem' }}>
                  <Elk nodes={nodeData} links={linkData} />
                </div>
              </div>
            </Column>
          </Row>

          <Row>
            <Column>
              <div style={{ paddingLeft: '15rem' }}>
                <svg height="300" width="1000" style={{ marginTop: '1.5em' }}>
                  {edges}
                  {nodes}
                </svg>
              </div>
            </Column>
          </Row>

          <Row>
            <Column>
              <div style={{ borderTop: "1px solid #ccc" }}>
                <main className="sample-page__main" ref={refMain}>
                  <div style={{ display: 'flex', justifyContent: 'right' }}>

                    <AlluvialChart data={data1} options={options1}>
                    </AlluvialChart>

                  </div>
                </main>
              </div>
            </Column>
          </Row>

        </Grid>

      </ScrollAnimations>


    </>
  );
};