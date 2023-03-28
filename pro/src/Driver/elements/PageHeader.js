import { Lightning16, Bee24 } from '@carbon/icons-react';


export const actionBarItems = [1, 2, 3, 4].map((item, index) => ({
  key: `Action ${index}`,
  renderIcon: index % 2 ? Lightning16 : Bee24,
  iconDescription: `Action ${item}`,
  onClick: () => {
    console.log(`Action ${index}`);
  },
}));


    
const makeBreadcrumb = (item, title) => ({
  href:'#',
  key: `Breadcrumb ${item}`,
  label: typeof title === 'string' ? title : `Breadcrumb ${item}`,
});

export const breadcrumbs = Array.from({ length: 2 }, (_, index) =>
  makeBreadcrumb(index + 1, `Breadcrumb ${index + 1}`)
);


