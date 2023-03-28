import React from 'react';

import { PageHeader } from '@carbon/ibm-products';
import { actionBarItems } from './elements/PageHeader';
import { ScrollAnimations } from '@carbon/ibmdotcom-react';

import '@carbon/ibmdotcom-styles/scss/components/scroll-into-view/_scroll-into-view.scss';

export const read = () => {

  return (
    <>
      <div style={{ margin: '-2rem -2rem 0rem -2rem', paddingBlockEnd: '3rem' }}>

        <PageHeader
          actionBarItems={actionBarItems}
          title='READING' />
      </div>

      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-8">
            <div style={{ paddingTop: '2rem' }}>

              <ScrollAnimations selectorTargets={'h1,p'} animation={'fade'} keepAnimations={true}>
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




