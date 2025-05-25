/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {OtpInput} from 'react-native-otp-entry';
import Button from '../../components/Button/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

const OtpVerification = ({route}) => {
  const [counter, setCounter] = useState(30);
  const {navigate} = useNavigation();
  const countDown = useCallback(() => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(countDown, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const {mobileNo} = route?.params || {};
  const onChangeText = useCallback(text => {
    console.log('OTP Text Change:', text);
  }, []);

  const onOTPFilled = useCallback(text => {
    console.log('Received Otp' + text);
    navigate("HomeScreen");
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>
          {"we've sent a verification code to "}
        </Text>
        <Text style={{fontSize: 18}}>
          {'+91-'}
          {mobileNo}
        </Text>
      </View>
      <View style={{margin: 20}}>
        <OtpInput
          numberOfDigits={6}
          onTextChange={onChangeText}
          onFilled={onOTPFilled}>
          {' '}
        </OtpInput>
      </View>

      {counter > 0 && (
        <Text style={{alignSelf: 'center', marginTop: 20}}>
          Resend OTP in {counter} sec
        </Text>
      )}
      {counter === 0 && (
        <Button style={{}}>
          {' '}
          <Text style={{fontSize: 18, color: '#0B5DA'}}>{'Resend'}</Text>
        </Button>
      )}
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({});
