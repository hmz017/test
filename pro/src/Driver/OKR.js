import { useState } from 'react';

import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TableToolbarAction, TableToolbar, TableToolbarSearch, TableToolbarMenu, } from 'carbon-components-react';
import HierarchyList from 'carbon-addons-iot-react/lib/components/List/HierarchyList/HierarchyList';

import { PageHeader } from '@carbon/ibm-products';
import { actionBarItems } from './elements/PageHeader';
import {  Toolbar, ToolbarGroup, ToolbarButton } from '@carbon/ibm-products';

import { Share16, Upload16, Save16, Printer16, Undo16, Redo16, ZoomIn16, ZoomOut16, Minimize20, AlignHorizontalCenter16, Ruler20, Pin16, CopyFile16,Eyedropper24,Launch16,Idea16,Rocket32} from '@carbon/icons-react';
import {options,aceOptions,untypedOptions} from './elements/options';

import {IdeFilter} from '@carbon/ibm-cloud-cognitive-cdai/lib/components/IdeFilter/index';
import { text, boolean, select, array } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Grid, Row, Column } from 'carbon-addons-iot-react';

import { headerData, rowData, sampleHierarchy } from './elements/makeData';


const fontSizes = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
];

export const TableCreat = () => {


  const [searchText, setSearchText] = useState("");
  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredRows = rowData.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

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
      <Grid>

        <Row>



          <Column style={{ paddingRight: '0rem', paddingLeft: '0rem' }} >

            <DataTable rows={filteredRows} headers={headerData}    >
              {({ rows, headers, getHeaderProps, getTableProps }) => (


                <TableContainer title="DataTable" >
                  <TableToolbar >
                    <TableToolbarSearch onChange={handleSearch} />


                    <TableToolbarMenu  >

                      <TableToolbarAction onClick={action('Action 1 Click')}>
                        Action 1
                      </TableToolbarAction>
                      <TableToolbarAction onClick={action('Action 2 Click')}>
                        Action 2
                      </TableToolbarAction>
                      <TableToolbarAction onClick={action('Action 3 Click')}>
                        Action 3
                      </TableToolbarAction>
                    </TableToolbarMenu>


                  </TableToolbar>
                  <Table {...getTableProps()} >
                    <TableHead >
                      <TableRow >
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
          <Column lg={12} style={{ paddingRight: '0rem', paddingLeft: '0rem' }} >
            <div style={{ borderTop: "4mm solid white" }}  >
              <TableContainer >
                <HierarchyList
                  title={text('Title', 'MLB Expanded List')}
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
              </TableContainer>
            </div>

          </Column>
        </Row>

      </Grid>
    </>

  );
}