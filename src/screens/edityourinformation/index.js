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
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';

export const EditInfo = ({navigation}) => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phone, setphone] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View>
          <Header dark={true} />
        </View>
        <View style={styles.headcontainer}>
          <Text style={styles.hedtext}>Edit your information</Text>
        </View>
        <View style={styles.filedContainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Patient first name '}
              value={firstname}
              setValue={setfirstname}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Patient last name '}
              value={lastname}
              setValue={setlastname}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Phone Number '}
              value={phone}
              setValue={setphone}
            />
          </View>
        </View>
        <View style={styles.fl}>
          <View>
            <Text style={styles.emailtext}>Email address</Text>
            <Text style={styles.email}>jhone@gmail.com</Text>
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate('editChildscreen')}>
              <Text style={styles.edit}>edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.trmcon}>
          <Text style={styles.trmcontext}>
            by providing your mobile number,you give us permission to contact
            you via text.
            <TouchableOpacity>
              <Text style={styles.trmtext}>View terms</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <View style={styles.buttnView}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttnView}>
          <TouchableOpacity>
            <View style={styles.buttonView1}>
              <Text style={styles.buttonText1}>Contact Member support</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
  container2: {
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRigh: sizes.screenWidth * 0.05,
    paddingTop: sizes.screenHeight * 0.02,
  },
  headcontainer: {
    paddingLeft: sizes.screenWidth * 0.03,
  },
  hedtext: {
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight: 'bold',
  },
  filedContainer: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  filedcon: {
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.03,
  },
  fl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
  },
  emailtext: {
    color: colors.black,
    fontWeight: 'bold',
  },
  email: {
    paddingTop: sizes.screenHeight * 0.01,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  edit: {
    paddingRight: sizes.screenWidth * 0.02,
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  trmcon: {
    marginTop: sizes.screenHeight * 0.05,
  },
  trmcontext: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  trmtext: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
    
},
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView1: {
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor:colors.disabledBg
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttonText1: {
    color: colors.secondary,
    fontSize: fontSize.h6,
  },
  buttnView: {
    marginRight:sizes.screenWidth*0.05,
    marginTop:sizes.screenHeight*0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
});