/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Dimensions,
   TouchableOpacity,
 } from 'react-native';
 const deviceHeight = Dimensions.get('window').height;
 const deviceWidth = Dimensions.get('window').width;
 import {
   Component,
   Componentsecond,
   Componentthrd,
   ComponentFour,
 } from '../../component/IntrComponent';
import { colors, fontSize, sizes } from '../../services';
// FontAwesome
import FontAwesome from 'react-native-vector-icons/FontAwesome';

 const Intro = () => {
   const slides = [
     {id: 1, name: <Component />},
     {id: 2, name: <Componentsecond />},
     {id: 3, name: <Componentthrd />},
     {id: 4, name: <ComponentFour />},
   ];
   const [imgActive, setImgActive] = useState(0);

   const onchange = nativeEvent => {
     if (nativeEvent) {
       const slide = Math.ceil(
         nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
       );
       if (slide != imgActive) {
         setImgActive(slide);
       }
     }
   };
   return (
     <SafeAreaView>
       <ScrollView
         onScroll={({nativeEvent}) => onchange(nativeEvent)}
         horizontal
         pagingEnabled
         showsHorizontalScrollIndicator={false}
         style={styles.srollwidth}
         disableIntervalMomentum={true}>
         {slides.map((item, index) => {
           return <View>{item.name}</View>;
         })}
       </ScrollView>
       {/* {slides?.map((item, index) => {
         console.log(item.id);
         return (
           <>
             {item.id == 4 ? (
               <View style={styles.footer}>
                 <TouchableOpacity>
                   <Text style={styles.fontsiginandsignup}>sign In</Text>
                 </TouchableOpacity>
                 <View style={styles.paginatiioncon}>
                   <View style={styles.dot} />
                   <View style={styles.dot} />
                   <View style={styles.dot} />
                   <View style={styles.dot} />
                 </View>
 
                 <TouchableOpacity>
                   <Text style={styles.fontsiginandsignup}>signUp</Text>
                 </TouchableOpacity>
               </View>
             ) : null}
           </>
         );
       })} */}
       <View style={styles.wrapDot}>
          {slides?.map((item, index) => {
            return (
              <View>
                  <Text
                    // key={index}
                    style={imgActive == index ? styles.dotActive : styles.dot}>
                   ◉
                  </Text>
                  
              </View>
            );
          })}
        </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   srollwidth: {
     width: deviceWidth,
   },
   footer: {
     marginTop: deviceHeight * 0.09,
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingLeft: deviceWidth * 0.05,
     paddingRight: deviceWidth * 0.05,
     borderTopWidth: deviceWidth * 0.001,
     paddingTop: deviceHeight * 0.02,
   },
   paginatiioncon: {
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
   },
 
   
   dot: {
    margin: 3,
    color: colors.secondary,
    opacity: 0.6,
    fontSize:fontSize.h2

  },
  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',
    position:'absolute',
    top:sizes.screenHeight * 0.92,
  },
  wrap: {
    width: sizes.screenWidth * 0.96,
  },
  dotActive: {
    margin: 3,
    color: colors.secondary,
    fontSize:fontSize.h2
  },
 });
 
 export default Intro;