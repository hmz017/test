import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenu,
  HeaderMenuItem,
  HeaderNavigation,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  HeaderMenuButton,
} from 'carbon-components-react/lib/components/UIShell';

import { action } from '@storybook/addon-actions';
import { options } from '@storybook/addon-knobs';
import {IdeFilter} from '@carbon/ibm-cloud-cognitive-cdai/lib/components/IdeFilter/index';



import { Notification20, UserAvatar20, Switcher20,Terminal20 as Terminal } from '@carbon/icons-react';
import { NotificationsPanel,useWebTerminal,
  WebTerminal,
  WebTerminalProvider } from '@carbon/ibm-products';
import { Link } from 'react-router-dom';
  
import { sampleData } from './sampleData';
import './Header.scss';


export const CommonHeader = () => {

    const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const handleClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded);

  };
  
  const [open, setOpen] = useState(false);
  const [notificationsData, setNotificationsData] = useState(sampleData);
  const { openWebTerminal } = useWebTerminal();


  return (
    <>
    
      <HeaderContainer
        render={() => (
          <Header aria-label="IBM [Product]">
            <SkipToContent />
      <HeaderMenuButton
         aria-label="Open menu"
         iscollapsible ='true'
         onClick={handleClickSideNavExpand}
        isActive={isSideNavExpanded}/>
            <HeaderName href="/" prefix="IBM">
              [Product]
            </HeaderName>
            <HeaderNavigation  aria-label="IBM [Platform]">

         <HeaderMenuItem  element={Link} to="/page1">Overview</HeaderMenuItem>

         <HeaderMenu aria-label="OKR" menuLinkName="OKR">

           <HeaderMenuItem  element={Link} to="/okr" >OKR</HeaderMenuItem>
           <HeaderMenuItem  element={Link} to="/okr2" >OKR2</HeaderMenuItem>

           </HeaderMenu>

          <HeaderMenuItem element={Link} to="/imp">Improve</HeaderMenuItem>

           
          <HeaderMenu aria-label="KPI" menuLinkName="KPIs">
          <HeaderMenuItem   element={Link} to="/review" >Review</HeaderMenuItem>
           <HeaderMenuItem  element={Link} to="/comment" >Comments</HeaderMenuItem>
           <HeaderMenuItem element={Link} to="/learn" >Learning</HeaderMenuItem>
          </HeaderMenu>
          <HeaderMenuItem element={Link} to='/read' >Read</HeaderMenuItem>

         </HeaderNavigation>

         <div style={{ margin: '1rem 1rem 2rem 10rem' }}>

<IdeFilter
  onChange={action('onChange')}
  options={options}
  placeholderText="Search for assets, people, tags or types..."
>
  filter
</IdeFilter>
    </div>

            <HeaderGlobalBar>
            
            

            <HeaderGlobalAction 
                aria-label="Web terminal"
                onClick={openWebTerminal}
                tooltipAlignment="end"
                iscollapsible ='true'

                isActive={open}
                
              >
                <Terminal />
              </HeaderGlobalAction>


              <HeaderGlobalAction 
                aria-label="Notifications"
                onClick={() => setOpen(!open)}
              >
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="User Avatar">
         <UserAvatar20 />
         </HeaderGlobalAction>

         <HeaderGlobalAction aria-label="App Switcher">
                     <Switcher20 />
         </HeaderGlobalAction>

            </HeaderGlobalBar>
            <SideNav aria-label="Side navigation" isPersistent={isSideNavExpanded} >
        <SideNavItems >
          <SideNavMenu  title="links">
            <SideNavMenuItem href='#' >link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" >
              Link
            </SideNavMenuItem>
            <SideNavMenuItem >Link</SideNavMenuItem>
          </SideNavMenu>

          <SideNavMenu  title="links">
            <SideNavMenuItem >Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" >
              Link
            </SideNavMenuItem>
            <SideNavMenuItem >Link</SideNavMenuItem>
          </SideNavMenu>

          <SideNavMenu  title="links">
            <SideNavMenuItem >Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" >
              Link
            </SideNavMenuItem>
            <SideNavMenuItem >Link</SideNavMenuItem>
          </SideNavMenu>
          
        </SideNavItems>
      </SideNav> 
      
      
        
        <NotificationsPanel
          open={open}
          onClickOutside={() => setOpen(false)}
          data={notificationsData}
          onDoNotDisturbChange={(event) =>
            console.log('Toggled do not disturb', event)
          }
          onViewAllClick={() => console.log('Clicked view all button')}
          onSettingsClick={() => console.log('Clicked settings gear button')}
          onDismissAllNotifications={() => setNotificationsData([])}
          onDismissSingleNotification={({ id }) => {
            let tempData = [...notificationsData];
            tempData = tempData.filter((item) => item.id !== id);
            setNotificationsData(tempData);
          }}
        />

      <WebTerminal
            closeIconDescription="Close terminal"
            documentationLinksIconDescription="Documentation links"
            documentationLinks={[
              {
                itemText: 'BX/ICP docs',
                href: '#',
                onClick: () => console.log('clicked'),
                openInNewTab: false,
              },
              {
                itemText: 'Kube docs',
                href: '#',
                onClick: () => console.log('clicked'),
                openInNewTab: true,
              },
              {
                itemText: 'Docker docs',
                href: '#',
                onClick: () => console.log('clicked'),
                openInNewTab: true,
              },
              {
                itemText: 'Helm docs',
                href: '#',
                onClick: () => console.log('clicked'),
                openInNewTab: true,
              },
            ]}
          >
            <div className="example-terminal">
              <p>Connection successful.</p>

              <p>
                DISCLAIMER: This is not a real terminal, you would pass your own
                terminal component into the children of the WebTerminal
                component.
              </p>

              <p>Please see the docs of this component for more information.</p>

              <p>joe bob:~$</p>
            </div>
          </WebTerminal>
      
          </Header>
          
        )}
        
      />
      

      

      
      
    </>
  );
};


export const Example = () => {
  // Web terminal needs a provider to work
  return (
    <WebTerminalProvider>
      <CommonHeader />
    </WebTerminalProvider>
  );
};

  