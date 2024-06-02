// TabBarIconComponent.js
import React from 'react';
import {IconImage} from './style';

interface TabBarIconProps {
  routeName: string;
  focused: boolean;
}

const TabBarIconComponent: React.FC<TabBarIconProps> = ({
  routeName,
  focused,
}) => {
  let iconName;
  switch (routeName) {
    case 'Início':
      iconName = focused
        ? require('../../assets/icons/home-active-icon.png')
        : require('../../assets/icons/home-icon.png');
      break;
    case 'Documents':
      iconName = focused
        ? require('../../assets/icons/documents-active-icon.png')
        : require('../../assets/icons/documents-icon.png');
      break;
    case 'Navio':
      iconName = focused
        ? require('../../assets/icons/ship-active-icon.png')
        : require('../../assets/icons/ship-icon.png');
      break;
    default:
      iconName = undefined;
  }

  if (!iconName) {
    return null;
  }

  return <IconImage source={iconName} />;
};

export default TabBarIconComponent;
