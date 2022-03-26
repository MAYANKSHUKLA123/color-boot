import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import BeautyWebView from 'react-native-beauty-webview';

const App = () => {
  // const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  // const onButtonPress = () => {
  //   setVisible(true);
  // };
  const onButtonPress1 = () => {
    setVisible1(true);
  };
  const onButtonPress2 = () => {
    setVisible2(true);
  };

  return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Image Colorization AI</Text>
        </View>
        {/* <BeautyWebView
          visible={visible} // Required for open and close 
          onPressClose={() => setVisible(false)} // Required for closing the modal
          url={'https://colourise.com/?source=ttai'}
          extraMenuItems={[
            {
              title: 'Extra Item',
              onPress: () => console.log('Extra Menu Item Clicked'),
            },
          ]} 
         /> */}
        <BeautyWebView
          visible={visible1} // Required for open and close 
          onPressClose={() => setVisible1(false)} // Required for closing the modal
          url={'https://colab.research.google.com/github/moein-shariatnia/Deep-Learning/blob/main/Image%20Colorization%20Tutorial/Image%20Colorization%20with%20U-Net%20and%20GAN%20Tutorial.ipynb#scrollTo=iqtMuAVt4pHH'}
          extraMenuItems={[
            {
              title: 'Extra Item',
              onPress: () => console.log('Extra Menu Item Clicked'),
            },
          ]}
          
        />

<BeautyWebView
          visible={visible2} // Required for open and close 
          onPressClose={() => setVisible2(false)} // Required for closing the modal
          url={'https://colab.research.google.com/drive/1_A1cLeTH_V1YaVC9V2FcPs81Nq8Upni6#scrollTo=ozF6W377Ctzk'}
          extraMenuItems={[
            {
              title: 'Extra Item',
              onPress: () => console.log('Extra Menu Item Clicked'),
            },
          ]}
          
        />
        {/* <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.text}>Open</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button1} onPress={onButtonPress1}>
          <Text style={styles.text}>Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onButtonPress2}>
          <Text style={styles.text}>Trained model</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  // button: {
  //   alignSelf: 'stretch',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 8,
  //   backgroundColor: '#2196f3',
  //   marginHorizontal: 20,
  // },
  button1: {
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#2196f3',
    marginHorizontal: 20,
  },
  button2: {
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#2196f3',
    marginHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  titleContainer: {
    marginRight:20,
    marginTop: 0,
    marginLeft: 20,
    marginBottom: 90,
  },
  title: {
    marginTop: 30,
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
    alignContent:"center",
    borderRadius:20,
    borderRightWidth: 1,
    borderLeftWidth:1,
   borderBottomWidth: 14,
       borderColor: '#024e51',
       elevation:30,
      shadowColor: 'rgba(0, 0, 0, 0.4)',
     shadowOpacity: 0.8,
     elevation: 30,
     shadowRadius: 15 ,
     shadowOffset : { width: 1, height: 13},
  },
});

export default App;