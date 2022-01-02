import React from 'react';
import { Panel } from '@fluentui/react';
import SidebarContent from './SidebarContent';

type Props = {
  isOpen: boolean;
  openPanel: (val: boolean) => void;
};

const Sidebar: React.FC<Props> = ({
  isOpen, openPanel
}) => {

  return (
    <Panel
      isOpen={isOpen}
      closeButtonAriaLabel='Close'
      isLightDismiss={true}
      headerText='Find Splyt Office'
      onDismiss={() => openPanel(false)}
    >
      <SidebarContent />
    </Panel>
  );
};

export default Sidebar;
