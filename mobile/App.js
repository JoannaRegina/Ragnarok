import { StatusBar } from 'expo-status-bar';
import React from 'react';
import colors from './src/components/colors';

import { AppLoading } from 'expo';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins'


import Routes from './src/routes'


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <React.Fragment>
        <StatusBar backgroundColor={colors.color_primary_darker} style={'light'} />
        <Routes />
      </React.Fragment>
    );
  }
}

