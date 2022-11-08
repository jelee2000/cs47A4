import { StyleSheet, View, Image, Dimensions, Text, Pressable } from "react-native";
import { getFontSize, millisToMinutesAndSeconds } from "../../utils";
import { Ionicons } from '@expo/vector-icons';

const fontSize = getFontSize()

export default function SongItem( {imageurl, title, artist, albumname, duration, previewURL, externalURL, navigation} ) {
    const songlength = millisToMinutesAndSeconds(duration);  
    return (
        <Pressable onPress = { () => {navigation.navigate('Song Details', {externalURL: externalURL})} }
            style = {styles.item}>
            <Pressable onPress = {() => {navigation.navigate('Preview Screen', {previewURL: previewURL})}}
            style = {styles.tracklistNum}> 
                <Ionicons name = "play-circle" color = "green" size = {windowWidth * .05}/> 
            </Pressable>
            <View>
                <Image style = {styles.image} source = {{uri: imageurl}}/>
            </View>
            <View style = {styles.titleartist}>
                <Text numberOfLines = {1} style = {{color:'white', fontSize: fontSize}}>{title}</Text>
                <Text numberOfLines = {1} style = {{color: 'gray', fontSize: fontSize}}>{artist}</Text>
            </View>
            <View style = {styles.album}>
                <Text numberOfLines = {1} style = {{color: 'white', fontSize: fontSize}}>{albumname}</Text>
            </View>
            <View style = {styles.durationStyle}>
                <Text style = {{color: 'white', fontSize: fontSize, alignItems: 'flex-end'}}>{songlength}</Text>
            </View>
        </Pressable>
    )
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      marginBottom: 5,
      width: '100%',
    },
    tracklistNum: {
        alignItems: "center",
        justifyContent: 'center',
        width: "10%",
    },
    tracklistText: {
        color: 'gray',
        fontSize: fontSize,
        marginHorizontal: 2,
    },
    image: {
        aspectRatio: 1,
        marginHorizontal: 2,
        width: windowWidth * 0.15, // 15% of the window 
        alignItems: "center",
        justifyContent: 'center',
    },
    album: {
        color: 'white',
        alignItems: "flex-start",
        justifyContent: 'center',
        width: "27.5%",
        marginHorizontal: 4,
    },
    titleartist: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 5,
        width: "32.5%",
    },
    durationStyle: {
        color: 'gray',
        width: "10%",
        alignItems: "center",
        justifyContent: 'center',
    },
  });