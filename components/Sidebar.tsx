import React from 'react';
import { Panel } from '@fluentui/react';
import { useRecoilState } from 'recoil'
import SidebarContent from './SidebarContent';
import { sidebarState,  } from '../recoil';

const Sidebar = () => {
  const [isOpen, openSidebar] = useRecoilState(sidebarState);
  
  return (
    <Panel
      isOpen={isOpen}
      closeButtonAriaLabel='Close'
      isLightDismiss={true}
      headerText='Settings'
      onDismiss={() => openSidebar(false)}
    >
      <SidebarContent />
    </Panel>
  );
};

export default Sidebar;

