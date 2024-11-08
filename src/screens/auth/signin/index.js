import React, { Component } from 'react';
import {  Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, Lines } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, colors, appIcons, } from '../../../services';
import { useHooks } from './hooks';
export default function Index(props) {
  const { navigate } = props.navigation

  const { handleLogin, forgot, handleSignup, email, setEmail, password, setPassword, toggle, secure } = useHooks()
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Headers.Auth onPress/>
        <Wrapper>
          <Spacer isBasic />
          <Text isBoldFont alignTextCenter style={{ fontSize: responsiveFontSize(24) }}>Hello Again!</Text>
          <Spacer isTiny/>
          <Text alignTextCenter isMedium style={{color:colors.appTextColor8}}>Welcome Back You’ve Been Missed!</Text>
          <Spacer isMedium />
          <TextInputs.Colored
           placeholder={"Email"}
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
                    <Spacer height={responsiveHeight(5)} />

          <Wrapper marginHorizontalBase>
            <Text isMedium isMediumFont alignTextCenter style={{color:'#B1B8BE'}}
               onPress={forgot}
            >Forgot Password</Text>
          </Wrapper>
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
           
          >Don't Have An Account? <Text isBoldFont style={{color:'#1E1E1E'}} onPress={handleSignup}>Sign Up for free</Text></Text>
          <Spacer height={responsiveHeight(5)} />
          <Text alignTextCenter isRegular style={{color:"#B1B8BE"}}>By continuing I agree with Privacy Policy{"\n"}and Terms & Conditions</Text>
        </Wrapper>

      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

