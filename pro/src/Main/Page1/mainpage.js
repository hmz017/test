
import GettingStartedLayout from '@carbon/ibm-security/lib/components/GettingStartedLayout';
import { DescriptionModule,TitleBarModule } from '@carbon/ibm-security';

import {Column,Row,Button, Link} from 'carbon-addons-iot-react';

import placeholder from '../images/placeholder.svg';

import './_sample-page.scss';

import {  Eyedropper24,Launch16,Idea16,Rocket32} from '@carbon/icons-react';

import { Typewriter } from 'react-simple-typewriter';

const CustomIcon = () => <Idea16 />




export const mainpage = () => {
    return (
<>




<GettingStartedLayout>
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
<div style={{color:'black'}}>
                    {/* <TitleBarModule title="GETTING STARTED"/> */}
                    <h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' ,color:'black',fontSize:'80px'}}>{' '}

<span style={{ color: 'black', fontWeight: 'bold' }}>
<Typewriter

words={['You See Sheets', 'we See Dashboards!']}
loop={5}
cursor 
cursorStyle='|'
typeSpeed={50}
deleteSpeed={50}
delaySpeed={1000}></Typewriter>
</span>

</h1>
                    <p {...getLayoutProps()}>
                      here is the  space to create your best report,
                      here is the  space to create your best report,
                    </p>
                    </div>
                  </>
                  
                );
              }}
            </DescriptionModule>
            
            <Row>
              <Column>
                <Button {...primaryButton} kind="secondary"  renderIcon={Rocket32} > 
                  <Link href='#review' >start</Link>
                </Button>
              </Column>
              
              <Column >
                <Button
                  {...secondaryButton}
                  kind="secondary"
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
            
            <p {...additionalInfo} style={{color:'black'}}>
              To learn more, press on the button
            </p>
            <Button {...tertiaryButton} kind="secondary" renderIcon={Launch16}>
              <Link href='https://v10.carbondesignsystem.com/'>learn more</Link>
            </Button>
          

        </>
        
      );
    }}
                        
  </GettingStartedLayout>
  
    </>
    );
    
}
