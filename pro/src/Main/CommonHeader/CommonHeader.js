

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


import { Notification20, UserAvatar20, Switcher20,Terminal20 as Terminal } from '@carbon/icons-react';
import { NotificationsPanel,useWebTerminal,WebTerminal,WebTerminalProvider } from '@carbon/ibm-products';
  
import { sampleData } from './sampleData';


export const CommonHeader = () => {

  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const handleClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded);

  };
  
  const [open, setOpen] = useState(false);
  const [notificationsData, setNotificationsData] = useState(sampleData);
  const { openWebTerminal } = useWebTerminal();
  const[openHead,setOpenHead]=useState(false);





  return (
    <>
      <HeaderContainer className='bx--header'
        render={() => (
          <Header aria-label="ECO"  >

            <SkipToContent />

      <HeaderMenuButton
         aria-label="Open menu"
         isCollapsible
         onClick={handleClickSideNavExpand}
        isActive={isSideNavExpanded}/>

            <HeaderName  href='#main' prefix="" >
              eco Products
            </HeaderName>
            
            <HeaderNavigation  aria-label="IBM [Platform]">

         <HeaderMenuItem  href="#page1">Overview</HeaderMenuItem>

         <HeaderMenu aria-label="OKR" menuLinkName="OKR">
           <HeaderMenuItem  href='#okr' >OKR</HeaderMenuItem>
           <HeaderMenuItem  href='#okr2' >OKR2</HeaderMenuItem>
           </HeaderMenu>

          <HeaderMenu aria-label="KPI" menuLinkName="KPIs">
          <HeaderMenuItem href='#imp'>Improve</HeaderMenuItem>
          <HeaderMenuItem   href='#review' >Review</HeaderMenuItem>
           <HeaderMenuItem  href='#comment' >Comments</HeaderMenuItem>
           <HeaderMenuItem href='#learn'>Learning</HeaderMenuItem>
          </HeaderMenu>

          <HeaderMenuItem href='#read' >Read</HeaderMenuItem>

         </HeaderNavigation>



            <HeaderGlobalBar>

            <HeaderGlobalAction 
            
                aria-label="Notifications"
                onClick={() => setOpen(!open)} >
                <Notification20 />
              </HeaderGlobalAction>

            <HeaderGlobalAction 
                aria-label="Web terminal"
                onClick={openWebTerminal}
                tooltipAlignment="end"
                iscollapsible ='true'
                isActive={open} >
                <Terminal />
              </HeaderGlobalAction>

              <HeaderGlobalAction 
              onClick={()=>setOpenHead(!openHead)}
              aria-label="User Avatar">
         <UserAvatar20 />
         </HeaderGlobalAction>

         <HeaderGlobalAction aria-label="App Switcher">
                     <Switcher20 />
         </HeaderGlobalAction>

            </HeaderGlobalBar>
            
            <SideNav aria-label="Side navigation" isPersistent={isSideNavExpanded} >

        <SideNavItems >

          <SideNavMenu  title="link1">
            <SideNavMenuItem href='#read' >link</SideNavMenuItem>
          </SideNavMenu>

          <SideNavMenu  title="link2">
            <SideNavMenuItem href='#'>Link</SideNavMenuItem>
            <SideNavMenuItem href='#'>Link</SideNavMenuItem>
             </SideNavMenu>

          <SideNavMenu  title="link3">
            <SideNavMenuItem >Link</SideNavMenuItem>
            <SideNavMenuItem href='#'>Link</SideNavMenuItem>
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
            onClickOutside={() => openWebTerminal(false)}
            closeIconDescription="Close "
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
              <p>Connection successful.</p>

              <p>
                DISCLAIMER: This is not a real terminal, you would pass your own
                terminal component into the children of the WebTerminal
                component.
              </p>

              <p>Please see the docs of this component for more information.</p>

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

