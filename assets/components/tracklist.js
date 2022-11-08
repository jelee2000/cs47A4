import { StyleSheet, FlatList, Image, Text, View } from "react-native";
import { Themes, Images } from "../Themes";
import SongItem from "./song";
import { Ionicons } from '@expo/vector-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const renderSongItem = ({item, index}, navigation) => ( //imageurl, title, artist, albumname, duration
    <SongItem
        //trackNum = {index + 1}
        navigation = {navigation}
        imageurl = {item.album.images[0].url}
        title = {item.name}
        artist = {item.artists[0].name} 
        albumname = {item.album.name}
        duration = {item.duration_ms}
        externalURL = {item.external_urls.spotify}
        previewURL = {item.preview_url}
      />
)

export default function Tracklist( {tracks, navigation} ) {

  return ( 
    <View style = {styles.container}> 
          <View style = {styles.header}>
              <Image source = {Images.spotify} style = {styles.logo}/>
              <Text style = {styles.headText}>My Top Tracks</Text>
          </View>
          <FlatList
              data = {tracks}
              renderItem={(params) => renderSongItem(params, navigation)}  
              keyExtractor={(_, index) => index} 
          />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    flex: 1,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  headText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  logo: {
    height: 35,
    width: 35,
    marginRight: 5,
  },
});