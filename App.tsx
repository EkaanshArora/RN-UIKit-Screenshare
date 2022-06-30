import React, {useState} from 'react';
import {View} from 'react-native';
import {RtcConfigure, GridVideo} from 'agora-rn-uikit/Components';
import {LocalUserContext, PropsContext} from 'agora-rn-uikit/Contexts';
import Controls from './src/Controls';
import RtmConfigure from 'agora-rn-uikit/src/RtmConfigure';
import PopUp from 'agora-rn-uikit/src/Controls/Remote/RemoteMutePopUp';

const App = () => {
  const [inCall, setCall] = useState(true);
  return inCall ? (
    <PropsContext.Provider
      value={{
        rtcProps: {appId: '<AgoraAppID>', channel: 'test'},
        callbacks: {EndCall: () => setCall(false)},
      }}>
      <RtcConfigure>
        <LocalUserContext>
          <RtmConfigure>
            <GridVideo />
            <Controls />
            <PopUp />
          </RtmConfigure>
        </LocalUserContext>
      </RtcConfigure>
    </PropsContext.Provider>
  ) : (
    <View />
  );
};

export default App;
