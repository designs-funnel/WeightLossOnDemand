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
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors} from '../../services';
import Loader from '../../components/Loader';
import {verifyCoupon} from '../../services/utilities/api/auth';
import {useSelector} from 'react-redux';
import Error from '../../components/Error';
import Modal from 'react-native-modal';
export default function ApplyCoupon({route,navigation}) {
  const [coupon, setCoupon] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [title, setTitle] = useState('Congratulations!');
  const token = useSelector(state => state.token);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const couponVerify = async () => {
    setLoader(true);
    // setTimeout(async () => {
    //   try {
    //     let response = await verifyCoupon(token,coupon);
    //     console.log(response);
    //     setLoader(false);
    //   } catch (error) {
    //     console.log('e--->',error);
    //     setLoader(false);
    //   }
    // }, 100);
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      '$2y$10$KmDTenzlBmb2iVT.tv0nu.zmfkP5FGW.WWGAfPcXeQZqqkuf7/uCW',
    );
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      coupon: coupon,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    setTimeout(() => {
      fetch('http://alsyedmmtravel.com/api/coupon_check', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setMessage(result.message);
          toggleModal()
          if (result.message == 'Invalid coupon') {
            setTitle('Oops!');
          }else{
            setTitle('Congratulations!');

          }
          setLoader(false);
        })
        .catch(error => console.log('error', error));
    }, 100);
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header
            title={'Apply Coupon'}
            skip={route?.params?.skip ? true : false}
          />
        </View>
        <View style={styles.padding}>
          <Text style={styles.couponHead}>Enter coupon code:</Text>
          <Text style={styles.shareText}>
            (Note: Coupons cannot be used for visits subsidized by your
            insurance or employer.)
          </Text>
          <TextInput
            mode="contain"
            label={'e.g. Coupon594'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            value={coupon}
            onChangeText={text => setCoupon(text)}
          />
          <View style={styles.top}>
            <TouchableOpacity onPress={couponVerify}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}> Submit Coupon</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>
      <View style={styles.color}>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <View style={styles.texcon}>
              <Text style={styles.text111}>{title}</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>{message}</Text>
            </View>
            <View>
              <TouchableOpacity
                // onPress={() => {
                //   screen
                //     ? navigation.navigate(screen)
                //     : setIsModalVisible(false);
                // }}
                onPress={()=>{title=== 'Oops!'? setIsModalVisible(false):navigation.navigate("Home")}}
                >
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
      </View>
      {/* {message !== '' && (
          <Error
            title={title}
            message={message}
            // screen={title === 'Invalid coupon' && 'Home'}
          />
        )}
        {loader && <Loader />} */}
    </SafeAreaView>
  );
}
