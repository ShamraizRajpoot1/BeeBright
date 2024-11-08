import React, { Component } from 'react';
import { Wrapper, Text, Logos, Icons, StatusBars } from '../../../components';
import { appImages, appStyles, appSvgs, colors, responsiveHeight, responsiveWidth } from '../../../services';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

function Splash() {
  return (
    <Wrapper isMain isCenter isImageBackground source={appImages.splash}>
      <StatusBars.Light/>
    </Wrapper>
  );
}

export default Splash;
