import React, { useState } from 'react';
import { PageHeader } from '@carbon/ibm-products/lib/components';
import { actionBarItems } from './elements/PageHeader';

import { WordCloudChart } from "@carbon/charts-react";
import { CirclePackChart } from '@carbon/charts-react';
import "@carbon/charts/styles.css";
import "./circlestyle.scss";
import { datacircle, optionscircle, worldsdata, worldsoptions } from './elements/makeData';

import { Column, Row, } from 'carbon-components-react';
import { Card, CARD_SIZES, } from 'carbon-addons-iot-react';
import { TextInput } from 'carbon-components-react';

import { DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';

const comments = [
  {
    id: 'a',
    name: 'JohnDoe',
    timestamp: '2021-04-01T10:00:00Z',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in malesuada diam.',
    image: 'https://placehold.jp/545ee8/ec1818/50x50.png?text=john',
  },
  {
    id: 'b',
    name: 'JaneSmith',
    timestamp: '2022-04-02T12:30:00Z',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    image: 'https://placehold.jp/7b7c8a/ec1818/50x50.png?text=jane',
  },
  {
    id: 'c',
    name: 'BobJohnson',
    timestamp: '2023-04-03T15:45:00Z',
    text: 'Suspendisse eget magna vel odio iaculis hendrerit eu nec dolor. Sed interdum fringilla nunc eu pulvinar.',
    image: 'https://placehold.jp/db1bde/ec1818/50x50.png?text=bob',
  },

];



export const com = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredComments = comments.filter(
    (comment) =>
      comment.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      new Date(comment.timestamp)
        .toLocaleString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const tableColumns = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'text',
      header: 'Comment',
    },
    {
      key: 'timestamp',
      header: 'Timestamp',
    },

  ];
  return (
    <>
      <div style={{ margin: '-2rem -2rem 0rem -2rem', paddingBlockEnd: '3rem' }}>

        <PageHeader
          actionBarItems={actionBarItems}
          title='COMMENTS' />
      </div>

      <>
        <TextInput
          id="search-comments"
          labelText=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search comments..."
          style={{ marginRight: '66rem', flexGrow: 1 }}
          light={true}
        />
        <Row>
          <Column>
            {comments
              .filter(
                (comment) =>
                  comment.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  comment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  new Date(comment.timestamp)
                    .toLocaleString()
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
              )
              .map((comment) => (
                <Card
                  key={comment.timestamp}
                  style={{ marginTop: '1rem' }}
                  size={CARD_SIZES.SMALLWIDE}
                >
                  <div
                    style={{ display: 'flex', alignItems: 'center ', padding: '1rem' }}
                  >
                    <img
                      src={comment.image}
                      alt={comment.name}
                      style={{ borderRadius: '50%', marginRight: '1rem' }}
                    />
                    <div>
                      <h4 style={{ marginBottom: 0 }}>{comment.name}</h4>
                      <div>
                        <p>{comment.text}</p>
                        <p
                          style={{ fontSize: '0.8rem', color: 'gray' }}
                        >
                          {new Date(comment.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            {comments
              .filter(
                (comment) =>
                  comment.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  comment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  new Date(comment.timestamp)
                    .toLocaleString()
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
              )
              .length === 0 && <p>No data</p>}


            <DataTable rows={filteredComments}
              headers={tableColumns}>
              {({ rows, headers, getHeaderProps, getTableProps }) => (

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
              )}
            </DataTable>
          </Column>
        </Row>
      </>

      <Column>
        <CirclePackChart data={datacircle} options={optionscircle} />
      </Column>

      <div style={{ borderTop: "4px solid #ccc" }}>
      </div>
      <Column  >
        <WordCloudChart data={worldsdata} options={worldsoptions} />
      </Column>


    </>
  );
};
