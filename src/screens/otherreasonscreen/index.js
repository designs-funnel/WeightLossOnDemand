import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const OtherReason = () => {
  const [text, settext] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.hedtext}>What is the reason for your visit ?</Text>
      </View>
      <View style={styles.getextcontainer}>
        <View style={styles.filedcon}>
          <CustomTextFiel
            label={'I would like to focus on '}
            value={text}
            setValue={settext}
          />
        </View>

       {text ?  <TouchableOpacity>
        <View style={styles.bdiv}>
          <Text style={styles.btext}>></Text>
        </View>
       </TouchableOpacity>: null

       }
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headcontainer: {
    paddingLeft: sizes.screenWidth * 0.05,
  },

  hedtext: {
    fontSize: fontSize.h2,
    color: colors.black,
    fontWeight: 'bold',
  },
  getextcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.05,
  },
  filedcon: {
    width: sizes.screenWidth * 0.9,
  },

  bdiv: {
    marginTop:sizes.screenHeight*0.05,
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.10,
    backgroundColor: colors.secondary,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:sizes.screenWidth*0.2
  },
  btext: {
    fontSize: fontSize.h2,
    color: colors.white,
    fontWeight:'bold'
  },
});