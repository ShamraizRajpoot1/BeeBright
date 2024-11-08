import React, { Component } from 'react';
import {  Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, Lines } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, colors, appIcons, } from '../../../services';
import { useHooks } from './hooks';
export default function Index(props) {
  const { navigate } = props.navigation

  const { handleLogin, email, setEmail, password, setPassword, toggle, secure, name, setName } = useHooks()
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Auth />
        <Wrapper>
          <Spacer isBasic />
          <Text isBoldFont alignTextCenter style={{ fontSize: responsiveFontSize(24) }}>Create Account</Text>
          <Spacer isTiny/>
          <Text alignTextCenter isMedium style={{color:colors.appTextColor8}}>Let’s Create Account Together</Text>
          <Spacer isMedium />
          <TextInputs.Colored
           placeholder={"Name"}
            value={name}
            onChangeText={setName}
          />
          <Spacer isMedium />
          <TextInputs.Colored
           placeholder={"Email or Phone"}
            value={email}
            onChangeText={setEmail}
          />
          <Spacer isMedium />
          <TextInputs.Colored
          placeholder={".........."}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secure}
            customIconRight
            onPressIconRight={toggle}
          />
          <Spacer isMedium />
          
          <Buttons.Colored
            text="Continue"
            // onPress={handleLogin}
          />

         
          <Spacer isMedium />
          <Wrapper marginHorizontalBase justifyContentSpaceBetween flexDirectionRow alignItemsCenter>
          <Lines.Horizontal width={responsiveWidth(40)}/>
          <Text isMedium style={{color:'#B1B8BE'}}>or</Text>
          <Lines.Horizontal width={responsiveWidth(40)}/>
          </Wrapper>
          <Spacer />
          <Buttons.Colored
          iconName={'apple'}
          iconSize={responsiveWidth(6.5)}
            text="Continue with Apple"
            // onPress={handleLogin}
            buttonColor={colors.appBgColor8}
            iconStyle={{color:colors.black}}
            textStyle={{color:colors.black}}
          />
          <Spacer />
          <Buttons.Colored
          customIcon={appIcons.google}
          iconSize={responsiveWidth(6.5)}
            text="Continue with Google"
            // onPress={handleLogin}
            buttonColor={colors.appBgColor8}

            textStyle={{color:colors.black}}
          />
          <Spacer />
          <Text isSmall alignTextCenter style={{color:colors.appTextColor8}}
           
          >Already Have An Account? <Text isBoldFont style={{color:'#1E1E1E'}} onPress={handleLogin}> Sign In</Text></Text>
          <Spacer height={responsiveHeight(5)} />
        </Wrapper>

      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

