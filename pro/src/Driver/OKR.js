
import {DataTable,TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, SelectItem,TableToolbar,TableToolbarSearch,TableToolbarMenu, Button,}from 'carbon-components-react';
import { headerData, rowData,sampleHierarchy } from './makeData';

import { PageHeader,SidePanel} from '@carbon/ibm-products';
import { useState,useRef } from 'react';

import {data,options,data3,options3,data1,options1} from '../Main/elements/chartsData';
import { PieChart,TreeChart,AlluvialChart } from "@carbon/charts-react"; 
import HierarchyList from 'carbon-addons-iot-react/lib/components/List/HierarchyList/HierarchyList';
import {text,boolean,select,array} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Grid,Row,Column } from 'carbon-addons-iot-react';

import {actionBarItems } from '../Main/elements/PageHeader';

export const TableCreat = () => {
    const refMain = useRef(null);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const openPanel = () => {
        setOpen(true);
        
      };
      const openmodel = () => {
        setOpen1(true);
      };
        const opencahrt = () => {
          setOpen2(true);
      };
      const pageActions = [
        {
          key: 'secondary',
          kind: 'secondary',
          label: 'PieChart',
          onClick: openPanel,
        },
        {
          key: 'primary',
          kind: 'primary',
          label: 'TreeChart',
          onClick: openmodel,
    
        },
        {
          key: 'danger',
          kind: 'secondary',
          label: 'alluvila',
          onClick: opencahrt,
        },
      ];
      
    return (

<>



<Grid>

  <Row>
  <h1>TABLES</h1>
      <PageHeader     
      {...{actionBarItems}}

 />
    <Column>
        
    <DataTable rows={rowData} headers={headerData}  >
      {({ rows, headers, getHeaderProps, getTableProps }) => (
        
  
        <TableContainer title="DataTable" >
          <TableToolbar>
        <TableToolbarSearch/>
        
        <TableToolbarMenu/>

        <Button
onClick={openPanel}>PiePie</Button>
        
        </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      )}
      
    </DataTable> 
   
    </Column>

<Column lg={3}>
<div style={{ width: 270, height: 470 }}>
    <HierarchyList
      title={text('Title', 'MLB Expanded List')}
      // defaultSelectedId={text('Default Selected Id', 'Chicago White Sox_Jose Abreu')}
      items={[
        ...Object.keys(sampleHierarchy.MLB['American League']).map((team) => ({
          id: team,
          isCategory: true,
          isSelectable: true,
          content: {
            value: team,
          },
          children: Object.keys(sampleHierarchy.MLB['American League'][team]).map((player) => ({
            id: `${team}_${player}`,
            content: {
              value: player,
            },
            isSelectable: true,
          })),
        })),
        ...Object.keys(sampleHierarchy.MLB['National League']).map((team) => ({
          id: team,
          isCategory: true,
          content: {
            value: team,
          },
          children: Object.keys(sampleHierarchy.MLB['National League'][team]).map((player) => ({
            id: `${team}_${player}`,
            content: {
              value: player,
            },
            isSelectable: true,
          })),
        })),
      ]}
      hasSearch={boolean('hasSearch', true)}
      pageSize={select('Page Size', ['sm', 'lg', 'xl', undefined], 'lg')}
      isLoading={boolean('isLoading', false)}
      isLargeRow={boolean('isLargeRow', false)}
      onSelect={action('onSelect')}
      hasDeselection={boolean('hasDeselection', true)}
      hasMultiSelect={boolean('hasMultiSelect', false)}
      isVirtualList={boolean('hasVirtualList', false)}
      expandedIds={array('A comma separated list of expandedIds (expandedIds)', [], ',')}
      onExpandedChange={action('onExpandedChange')}
    />
  </div>
</Column>


    <SidePanel
        open={open2}
        onRequestClose={() => setOpen2(false)}
        secondaryButtonText="close"
        
      >
        
        <div className="main--content">
  <main className="sample-page__main" ref={refMain}>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <AlluvialChart data={data1} options={options1}>
            </AlluvialChart>
            
            
          </div>
        </main>
        </div>
      </SidePanel>
    <SidePanel
        open={open1}
        onRequestClose={() => setOpen1(false)}
        secondaryButtonText="close"
        
      >
        
        <div className="main--content">
  <main className="sample-page__main" ref={refMain}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TreeChart data={data3} options={options3}  >
            </TreeChart>
          </div>
        </main>
  </div>
        
      </SidePanel>



<SidePanel
  includeOverlay
  className="test"
  open={open}
  onRequestClose={() => setOpen(false)}
  title="pie chart"
>
<div className="main--content">
  <main className="sample-page__main" ref={refMain}>
          <div style={{ display: 'flex', justifyContent: 'right' }}>
            <PieChart data={data} options={options} >  
            </PieChart>
          </div>
        </main>
  </div>
</SidePanel >      
</Row>

</Grid>
    </>
    
      );
    }