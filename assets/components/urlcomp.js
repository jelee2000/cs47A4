import React from 'react';
import {View} from "react-native"
import { WebView } from 'react-native-webview';

// ...
export default function UrlComponent ({link}) {
  return (
      <WebView source = {{uri: link}} />
  )
}