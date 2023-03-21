import React from 'react';
import { PageHeader } from '@carbon/ibm-products/lib/components';
import { actionBarItems } from '../Main/elements/PageHeader';
import './styles2.scss';

export const lrn = () => {
  
  return (
    <>
      <PageHeader
        title="learning"
        subtitle="subtitle"
        actionBarItems={actionBarItems}
        actionBarOverflowAriaLabel="Overflow Menu"
      />


   </>
  );
};
