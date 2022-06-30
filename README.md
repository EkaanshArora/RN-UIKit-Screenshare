# Agora React Native UIKit Extend
An simple exampple example demonstrating how the [Agora React Native UIKit](https://github.com/AgoraIO-Community/ReactNative-UIKit/) can be extended to add a new feature like AI Denoising.

You can access the engine instance from the React Native SDK that's used by the UIKit and add your own custom code on top of the UIKit logic. You can read more about it in `./src/CustomButton.tsx`.

## Steps to run

### iOS
- Run `npm i` and `cd ios && pod install`
- Open the `ios/<projectname>.xcworkspace` file with xcode
- Code sign and run on a physical device using xcode

## Android
- Run `npm i`
- Run `npm start`
- In another terminal, run `npm run android`.

**It is recommend to build the app on a physical device rather than a simulator since simulators might not have access to camera and mic**
