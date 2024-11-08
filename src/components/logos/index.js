import React from 'react'
import {  appIcons ,appImages,appSvgs, responsiveWidth} from '../../services';
import * as Icons  from '../icons';

export const Primary = ({ size }) => {
  return (
    <Icons.Custom 
    icon={appImages.logo}
    size={size}
    />
    // <Icons.Svg
    // svg={appSvgs.logo}
    // size={size||responsiveWidth(50)}
    // />
  );
}

export const PrimaryWhite = ({ size }) => {
  return (
    <Icons.Svg
    svg={appSvgs.logo_white}
    size={size||responsiveWidth(50)}
    />
  );
}