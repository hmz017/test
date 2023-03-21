import React from 'react';
import { PageHeader } from '@carbon/ibm-products';
import { actionBarItems } from '../Main/elements/PageHeader';
import { ScrollAnimations } from '@carbon/ibmdotcom-react';
import '@carbon/ibmdotcom-styles/scss/components/scroll-into-view/_scroll-into-view.scss';
import './styles2.scss';

import TableOfContents from '@carbon/ibmdotcom-react/es/components/TableOfContents/TableOfContents';

const headingContent = <div>Comments</div>;
const theme = ''; //Empty for light, g100 for dark

const menuItems = [
  {
    title: 'par1',
    id: '1',
  },
  {
    title: 'par2',
    id: '2',
  },
  {
    title: 'par3',
    id: '3',
  },
  {
    title: 'par4',
    id: '4',
  },
  {
    title: 'par5',
    id: '5',
  },
  {
    title: 'par6',
    id: '6',
  },
];

export const read = () => {

  return (
    <>
    <div style={{ paddingRight:'2rem', paddingLeft:'1.5rem' }}>
    <PageHeader
        title="reading"
       
        {...{ actionBarItems}}
      >
        
      </PageHeader>
      </div>
      
      <div className="bx--grid">
    <div className="bx--row">
      <div className="bx--col-sm-4 bx--col-lg-8">
      <div style={{ paddingTop: '2rem' }}>

        <ScrollAnimations  selectorTargets={'h1,p'} animation={'fade'} keepAnimations={true}>
        <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
          <h1>This is extra content so we can scroll!</h1>
     

       
        </ScrollAnimations>

        </div>

      </div>
    </div>
  </div>


    </>
  );
};




  