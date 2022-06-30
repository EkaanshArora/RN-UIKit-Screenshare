import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RtcContext} from 'agora-rn-uikit/Contexts';

function Button() {
  const {RtcEngine} = useContext(RtcContext);
  const [enabled, setEnabled] = useState(false);
  const green = '#00ff00';
  const white = '#fff';
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={styles.localButton}
        onPress={async () => {
          if (!enabled) {
            await RtcEngine.startScreenCapture({});
            setEnabled(true);
          } else {
            await RtcEngine.stopScreenCapture();
            setEnabled(false);
          }
        }}>
        <Image
          style={[styles.icon, {tintColor: enabled ? green : white}]}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABRklEQVRIieXUyy4EQRTG8R/WTNyaldiR8B6CJ2FPxiU8iHgMl40NNsSKBWHDziURT2As6ky0TmZ0m5FInKRSVadO/U/116eKP2hjqOMCr9FOsYH+TuELeEajRVvqFP4eoD3MYQq34bvCyE/h43gJ0BZ6kAW0Cc8idhjLKspVD9B+wGst4PmkG1USXMSmuZivfwNv4AR6SyaYiP4s+kZhPcMRZnEXvpnSx8dbQAdiXpQoP56O8WOVBKexab5w6rwkTbkWYn5eFp7hJjbVC2s1rIW/JhXAYcSuloXnP79dnfdgO2KfpBtfCd6sllFsSnKNYEiS5SBi332VshK8qHuxPXULfoNj6aF7kcp3JRfb0kZxGZBr6Ylo569kgyVOnvdXtt3fhPP5Wk7+BhweArYYSboKJ93IYtl1DQ59keRekmtH+vH/3D4A73qGGEQiRsYAAAAASUVORK5CYII=',
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 5,
          color: '#fff',
        }}>
        Screenshare
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  localButton: {
    width: 46,
    height: 46,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
  },
});

export default Button;
