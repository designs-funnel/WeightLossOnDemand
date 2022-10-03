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

export default function HowToSchedule({navigation}) {
  return (
    <SafeAreaView>
      <Header dark={true} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>How to schedule</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>How would you like to schedule?</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseProvider')}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}> Find a provider</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.paddingTop2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChooseAppointment')}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}> Find a time</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}