import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {
  LocalAudioMute,
  LocalVideoMute,
  SwitchCamera,
  Endcall,
} from 'agora-rn-uikit/Components';
import {LocalUserContext} from 'agora-rn-uikit/Contexts';
import CustomButton from './CustomButton';

function Controls() {
  return (
    <LocalUserContext>
      <View style={styles.Controls as StyleProp<ViewStyle>}>
        <LocalAudioMute />
        <LocalVideoMute />
        <SwitchCamera />
        <CustomButton />
        <Endcall />
      </View>
    </LocalUserContext>
  );
}

const styles = {
  Controls: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    width: '100%',
    height: 70,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
};

export default Controls;
