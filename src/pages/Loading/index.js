import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from 'react-native';

import logoImg from '../../assets/images/logo.png';

import {Actions} from 'react-native-router-flux';

const switchToAuth = () => {
  Actions.replace('auth');
};

const Loading = () => {
  const [logoAnime, setLogoAnime] = useState(new Animated.Value(0));
  const [logoText, setLogoText] = useState(new Animated.Value(0));
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    console.log('Passando pelo UseEffect!!!');

    Animated.parallel([
      Animated.spring(logoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: false,
      }),

      Animated.timing(logoText, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setLoadingSpinner(true);

      setTimeout(switchToAuth, 1200);
    });
  }, [logoAnime, logoText]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: logoText,
          top: logoAnime.interpolate({
            inputRange: [0, 1],
            outputRange: [80, 0],
          }),
        }}>
        <Image source={logoImg} />
      </Animated.View>
      <Animated.View
        style={{
          opacity: logoText,
        }}>
        <Text style={styles.logoText}> logoText </Text>
      </Animated.View>
      {loadingSpinner && <ActivityIndicator size="large" color="#00ff00" />}
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5257F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 30,
    marginTop: 30,
    fontWeight: '300',
  },
});
