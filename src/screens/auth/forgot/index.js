import React, { Component } from 'react';
import { Wrapper, Text, Headers, Spacer, Buttons } from '../../../components';
import {useHooks} from './hooks'
import { appIcons, colors, responsiveFontSize, responsiveWidth } from '../../../services';

export default function Index(props) {
    const { } = useHooks(props)
    return (
        <Wrapper isMain >
            <Headers.Auth />
            <Spacer />
            <Text isBoldFont alignTextCenter style={{ fontSize: responsiveFontSize(24) }}>Reset your password</Text>
          <Spacer isTiny/>
          <Text alignTextCenter isMedium style={{color:colors.appTextColor8}}>Please Select one option where you want to receive The OTP we will send an OTP code         in the next step to reset your password.</Text>
          <Spacer isMedium />
          <Buttons.Colored
          iconName={'whatsapp'}
          iconSize={responsiveWidth(6.5)}
            text="Whatsapp"
            // onPress={handleLogin}
            buttonColor={colors.appBgColor8}
            iconStyle={{color:colors.black}}
            textStyle={{color:colors.black}}
          />
          <Spacer />
          <Buttons.Colored
          customIcon={appIcons.message}
          iconSize={responsiveWidth(6.5)}
            text="Message"
            // onPress={handleLogin}
            buttonColor={colors.appBgColor8}
            iconStyle={{color:colors.black}}
            textStyle={{color:colors.black}}
          />
          <Spacer />
          <Buttons.Colored
          customIcon={appIcons.email}
          iconSize={responsiveWidth(6.5)}
            text="Email"
            // onPress={handleLogin}
            buttonColor={colors.appBgColor8}
            iconStyle={{color:colors.black}}
            textStyle={{color:colors.black}}
          />
          <Wrapper  isAbsolute style={{bottom:50, width:'100%'}}>
          <Buttons.Colored
          iconSize={responsiveWidth(6.5)}
            text="Continue"
            // onPress={handleLogin}
            iconStyle={{color:colors.black}}
            textStyle={{color:colors.black}}
            style
          />
          </Wrapper>
        </Wrapper>
    );
}

