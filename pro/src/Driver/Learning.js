import React from 'react';

import { PageHeader } from '@carbon/ibm-products/lib/components';
import { actionBarItems } from './elements/PageHeader';
import { Link, Row, Column } from 'carbon-addons-iot-react';
import { ScrollAnimations } from '@carbon/ibmdotcom-react';

import '@carbon/ibmdotcom-styles/scss/components/scroll-into-view/_scroll-into-view.scss';

import { ArrowsVertical16, ArrowDownRight16 } from '@carbon/icons-react';
export const lrn = () => {



   return (
      <>


         <div style={{ margin: '-2rem -2rem 0rem -2rem', paddingBlockEnd: '3rem' }}>

            <PageHeader
               actionBarItems={actionBarItems}
               title='LEARNING' />
         </div>
         <ScrollAnimations selectorTargets={'h1,p'} animation={'fade'} keepAnimations={true}>
            <div style={{ color: 'white' }}>

               <Row>
                  <Column>

                     <h1>COURSES</h1>

                     <div style={{ borderTop: "0.2mm solid black" }} />
                     <p style={{ paddingTop: '2rem' }}>Lorem ipsum</p>
                     <h1>Aliquam condimentum</h1>

                     <Column style={{ paddingLeft: '60rem', paddingBottom: '2rem' }}>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowDownRight16} >Link text.
                           </Link>
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowsVertical16} >External link text
                           </Link></p>
                     </Column>
                  </Column>
               </Row>


               <Row>
                  <Column>
                     <div style={{ borderTop: "0.2mm solid black" }} />

                     <p style={{ paddingTop: '2rem' }}>Lorem ipsum</p>
                     <h1>Aliquam condimentum</h1>
                     <Column style={{ paddingLeft: '60rem', paddingBottom: '2rem' }}>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowDownRight16} >Link text.
                           </Link>
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowsVertical16} >External link text
                           </Link></p>
                     </Column>
                  </Column>
               </Row>

               <Row>
                  <Column>
                     <div style={{ borderTop: "0.2mm solid black" }} />

                     <p style={{ paddingTop: '2rem' }}>Lorem ipsum</p>
                     <h1>Aliquam condimentum</h1>
                     <Column style={{ paddingLeft: '60rem', paddingBottom: '2rem' }}>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowDownRight16} >Link text.
                           </Link>
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowsVertical16} >External link text
                           </Link></p>
                     </Column>
                  </Column>
               </Row>

               <Row>
                  <Column>
                     <div style={{ borderTop: "0.2mm solid black" }} />

                     <p style={{ paddingTop: '2rem' }}>Lorem ipsum</p>
                     <h1>Aliquam condimentum</h1>
                     <Column style={{ paddingLeft: '60rem', paddingBottom: '2rem' }}>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowDownRight16} >Link text.
                           </Link>
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowsVertical16} >External link text
                           </Link></p>
                     </Column>
                  </Column>
               </Row>

               <Row>
                  <Column>
                     <div style={{ borderTop: "0.2mm solid black" }} />

                     <p style={{ paddingTop: '2rem' }}>Lorem ipsum</p>
                     <h1>Aliquam condimentum</h1>
                     <Column style={{ paddingLeft: '60rem', paddingBottom: '2rem' }}>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowDownRight16} >Link text.
                           </Link>
                           <Link href='https://react.carbondesignsystem.com/?path=/story/components-link--paired-with-icon' renderIcon={ArrowsVertical16} >External link text
                           </Link></p>
                     </Column>

                  </Column>
               </Row>
            </div>
         </ScrollAnimations>

      </>
   );
}; 
