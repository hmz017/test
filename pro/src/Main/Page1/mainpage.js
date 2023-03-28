import { PageHeader} from '@carbon/ibm-products/lib/components';

import GettingStartedLayout from '@carbon/ibm-security/lib/components/GettingStartedLayout';
import { DescriptionModule,TitleBarModule } from '@carbon/ibm-security';

import {Column,Row,Button, Link} from 'carbon-addons-iot-react';

import {Eyedropper24,Launch16,Idea16,Rocket32} from '@carbon/icons-react';
import placeholder from '../images/placeholder.svg';
import {options,aceOptions,untypedOptions} from './options';

import {IdeFilter} from '@carbon/ibm-cloud-cognitive-cdai/lib/components/IdeFilter/index';
import './_sample-page.scss';

const CustomIcon = (props) => <Idea16 {...props} />

export const mainpage = () => {
    return (
<>
<div style={{ margin: '-2rem -2rem 0rem -2rem',paddingBlockEnd:'3rem' }}>

        <PageHeader>
          <div style={{margin:'0rem -2rem -1rem -2rem',paddingLeft:'25rem'}}>
<IdeFilter 
open={true}
  options={options}
  placeholderText="Search for assets, people, tags or types..."
  searchIcon={CustomIcon}
  >
    
</IdeFilter>
</div>
</PageHeader>
</div>

<GettingStartedLayout className="security--theme--cg10">
    {({ getLayoutProps }) => {
      const {
        description,
        primaryButton,
        secondaryButton,
        tertiaryButton,
        illustration,
        additionalInfo,
      } = getLayoutProps();

      return (
        <>

            <DescriptionModule {...description}>
              {({ getLayoutProps }) => {
                return (
                  <>
<div style={{color:'white'}}>
                    <TitleBarModule title="GETTING STARTED"  />
                    <p {...getLayoutProps()}>
                      here is the  space to create your best report,
                      here is the  space to create your best report,
                    </p>
                    </div>
                  </>
                  
                );
              }}
            </DescriptionModule>
            
            <Row style={{ marginBottom: '10px' }}>
              <Column>
                <Button {...primaryButton} kind="ghost"  renderIcon={Rocket32} > 
                  <Link href='#review' >start</Link>
                </Button>
              </Column>
              
              <Column >
                <Button
                  {...secondaryButton}
                  kind="ghost"
                  renderIcon={Eyedropper24}
                  style={{ marginLeft: '-150px' }}
                >
                    <Link href='#learn'>tutorial</Link>

                </Button>
                </Column>

                <Column lg={{ span: 5, offset: 1 }}>
            <img
              {...illustration}
              src={placeholder}
              alt="Getting started illustration"
            />
          </Column>
                
             
            </Row>
            
            <p {...additionalInfo} style={{color:'white'}}>
              To learn more, press on the button
            </p>
            <Button {...tertiaryButton} kind="tertiary" renderIcon={Launch16}>
              <Link href='https://v10.carbondesignsystem.com/'>learn more</Link>
            </Button>
          

        </>
        
      );
    }}
                        
  </GettingStartedLayout>
  
    </>
    );
    
}
