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
import {colors} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';

export default function ContactSupport() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} title={"Help"}/>
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Contact support</Text>
        </View>
        <TouchableOpacity>
          <View style={[styles.row, styles.card]}>
            <Octicons name="question" color={colors.secondary} size={30} />
            <View>
              <Text style={styles.cardText}>{'   '}Credit Card, FSA, HSA</Text>
              <Text style={styles.faqText}>{'   '}Browse our FAQs</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.row, styles.card]}>
            <Octicons name="question" color={colors.secondary} size={30} />
            <View>
              <Text style={styles.cardText}>{'   '}Message Support</Text>
              <Text style={styles.faqText}>{'   '}Send us a secure message</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.row, styles.card]}>
            <Octicons name="question" color={colors.secondary} size={30} />
            <View>
              <Text style={styles.cardText}>{'   '}Call Support 24/7</Text>
              <Text style={styles.faqText}>{'   '}1(800) 997-6196</Text>
              <Text style={styles.faqText}>{'   '}TTY: 711</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}