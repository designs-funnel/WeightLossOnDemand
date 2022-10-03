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
export default function Filter({navigation, route}) {
  const [first, setfirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(true);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const handleAny = () => {
    setfirst(true);
    setSecond(false);
    setThird(false);
  };
  const handleToday = () => {
    setfirst(false);
    setSecond(true);
    setThird(false);
  };
  const handleTomorrow = () => {
    setfirst(false);
    setSecond(false);
    setThird(true);
  };
  const handleAny1 = () => {
    setFourth(true);
    setFifth(false);
    setSixth(false);
  };
  const handleFemale = () => {
    setFourth(false);
    setFifth(true);
    setSixth(false);
  };
  const handleMale = () => {
    setFourth(false);
    setFifth(false);
    setSixth(true);
  };
  console.log('---->>', route?.params?.language);
  return (
    <SafeAreaView>
      <Header dark={true} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Filters</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>AVAILABILITY</Text>
            <View style={[styles.paddingTop, styles.row]}>
              <View style={styles.border}>
                <TouchableOpacity onPress={handleAny}>
                  <View style={[styles.view, first && styles.selected]}>
                    <Text style={styles.text2}>Any</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleToday}>
                  <View style={[styles.view, second && styles.selected]}>
                    <Text style={styles.text2}>Today</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleTomorrow}>
                  <View style={[styles.view, third && styles.selected]}>
                    <Text style={styles.text2}>Tomorrow</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>GENDER</Text>
            <View style={[styles.paddingTop, styles.row]}>
              <View style={styles.border}>
                <TouchableOpacity onPress={handleAny1}>
                  <View style={[styles.view, fourth && styles.selected]}>
                    <Text style={styles.text2}>Any</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFemale}>
                  <View style={[styles.view, fifth && styles.selected]}>
                    <Text style={styles.text2}>Female</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleMale}>
                  <View style={[styles.view, sixth && styles.selected]}>
                    <Text style={styles.text2}>Male</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text}>LANGUAGE</Text>
            </View>
            <View style={styles.paddingTop}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SelectLanguage')}>
                <View style={[styles.row2, styles.card]}>
                  {route?.params?.language ? (
                    <Text style={styles.cardText}>
                      {route?.params?.language}
                    </Text>
                  ) : (
                    <Text style={styles.cardText}>English</Text>
                  )}
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.paddingTop}>
              <Text style={styles.text}>FOCUS AREA</Text>
            </View>
            <View style={styles.paddingTop}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SelectFocusArea')}>
                <View style={[styles.row2, styles.card]}>
                  {route?.params?.area ? (
                    <Text style={[styles.cardText]}>
                      {route?.params?.area}
                    </Text>
                  ) : (
                    <Text style={[styles.cardText, styles.italic]}>
                      None selected
                    </Text>
                  )}

                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.paddingTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChooseProvider')}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}> Show 163 results</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.paddingTop2}>
            <TouchableOpacity
            //   onPress={() => navigation.navigate('GetCare')}
            >
              <View>
                <Text style={styles.redBtn}> Reset filters</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}