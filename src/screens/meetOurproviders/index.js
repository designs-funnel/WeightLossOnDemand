import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GetCare from '../../components/GetCare';
import images from '../../services/utilities/images';

import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {styles} from './style';

export default function  Meetourproviders({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'Meet Our Providers'} />
      <ScrollView style={styles.color}>
        {!showVideo ? (
          <ImageBackground source={images.mother} style={styles.image}>
            <TouchableOpacity onPress={() => setShowVideo(true)}>
              <View style={styles.playBtn}>
                <Image source={images.playIcon} style={styles.playIcon} />
              </View>
            </TouchableOpacity>
            <View style={styles.textView}>
              <Text style={styles.heading}>Meet Our Providers</Text>
            </View>
          </ImageBackground>
        ) : (
          <WebView
            source={{uri: 'https://www.youtube.com/embed/rCa-TYJabNY'}}
            style={styles.videoView}
          />
        )}

        <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('HowItWorksVT')}>
            <View style={[styles.top]}>
              <Text style={styles.subHeading}>See transcript for video</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.padding}>
          
            <TouchableOpacity onPress={() => navigation.navigate('introductionscreen')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Introduction</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('physiciansscreen')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Physicans</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Featuresproviderscreen')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Psychiatrist & Therapists</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => navigation.navigate('screeningandtrainingscreen')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Screening & Training</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('qualityandoversight')}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Quality & Oversight</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}