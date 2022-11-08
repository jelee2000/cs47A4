import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Authbutton from "./assets/components/authbutton";
import Tracklist from "./assets/components/tracklist";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UrlComponent from "./assets/components/urlcomp";
// pass in URLs here??
const MainScreen = ( {navigation} ) => { 
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null;
  if (token) {
    contentDisplayed = <Tracklist navigation = {navigation} tracks = {tracks} />
  } else {
    contentDisplayed = <Authbutton getSpotifyAuth= {getSpotifyAuth}/>
  }
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const SongDetailsScreen = ( {route} ) => {
  const details = route.params.externalURL
  return (
    <UrlComponent link = {details}></UrlComponent>
  )
}

const PreviewScreen = ( {route} ) => {
  const preview = route.params.previewURL
  return (
    <UrlComponent link = {preview}></UrlComponent>
  )
}

export default function App() {
  const Stack = createStackNavigator(); 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {MainScreen} options={{headerShown: false}}/>
        <Stack.Screen 
            name = "Song Details" 
            component = {SongDetailsScreen} 
            options = {{
              headerStyle: {backgroundColor: Themes.colors.background}, 
              headerTintColor: 'white',
            }} 
        />
        <Stack.Screen 
            name = "Preview Screen" 
            component = {PreviewScreen} 
            options = {{
              headerStyle: {backgroundColor: Themes.colors.background}, 
              headerTintColor: 'white',
            }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
