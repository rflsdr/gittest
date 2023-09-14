import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {SvgUri} from 'react-native-svg';

const ImageContainer = ({name}) => {
  return (
    <View style={styles.imageBox}>
      <Image style={styles.imageself} source={require('./assets/girl.jpg')} />
      <Text style={styles.customFontText}>{name}</Text>
      <Text style={{alignSelf: 'center'}}>100m away</Text>
    </View>
  );
};

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={{flex: 1}}
      blurRadius={5}>
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.navigator}>
          <Image
            style={{width: 40, height: 40}}
            source={require('./assets/icons/arrowLeft.png')}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#989898'}}>
            People
          </Text>
          <Text style={{fontSize: 20, color: '#A459D1', fontWeight: 'bold'}}>
            View all
          </Text>
          <Image
            style={{width: 40, height: 40}}
            source={require('./assets/icons/adjustIcon.png')}
          />
        </View>
        <ScrollView>
        <View style={styles.usersbox}>
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
          <ImageContainer name="Maria Joyce" />
        </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 70,
            backgroundColor: '#38E54D',
            width: '95%',
            borderRadius: 16,
            paddingVertical: 15
          }}>
          <Text style={{alignSelf:'center',fontSize:18, fontWeight:'bold',color:'#2D2727'}}>SEND REQUEST TO ALL</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    alignItems: 'center',
  },
  navigator: {
    width: '90%',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  usersbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contField: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 16,
  },
  imageBox: {
    width: 104,
    marginHorizontal: 14,
    marginBottom: 24,
  },
  imageself: {
    width: 104,
    height: 104,
    borderTopRightRadius: 36,
    borderBottomRightRadius: 36,
    borderBottomLeftRadius: 36,
    marginBottom: 8,
    borderColor: 'white',
    borderWidth: 2,
  },
  customFontText: {
    fontFamily: 'GeneralSans-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D2727',
    alignSelf: 'center',
  },
});
