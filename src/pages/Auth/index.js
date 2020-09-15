import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Form, Item, Input, Body, CheckBox, Button} from 'native-base';

const Auth = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const clicando = useCallback(() => {
    console.log('Clicando...');
    setIsAdmin((prevState) => !prevState);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.middle}>
        <Text style={styles.textContainer}>you are ready to go</Text>
        <View style={styles.formArea}>
          <Text style={[styles.textContainer, styles.signIn]}>Sign in</Text>
          <Form style={styles.mainForm}>
            <Item style={styles.formItems}>
              <Input placeholder="Username" styles={styles.Input} />
            </Item>

            <Item style={styles.formItems}>
              <Input placeholder="Password" styles={styles.Input} />
            </Item>

            <View style={styles.loginAs}>
              <Text style={styles.loginText}>Login as</Text>

              <Body style={styles.cboxBody}>
                <CheckBox checked={isAdmin} onPress={clicando} />
                <Text style={styles.cboxText}>Admin</Text>
              </Body>

              <Body style={styles.cboxBody}>
                <CheckBox checked={!isAdmin} onPress={clicando} />
                <Text style={styles.cboxText}>User</Text>
              </Body>
            </View>

            <View style={styles.Button}>
              <Button block style={styles.mainBtn}>
                <Text style={styles.btnText}>Submit</Text>
              </Button>
            </View>
          </Form>
        </View>
      </View>
      <View style={styles.bottom} />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  mainForm: {
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    backgroundColor: '#5257f2',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 250,
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingLeft: 12.7,
    paddingRight: 12.7,
    backgroundColor: '#5257f2',
  },
  textContainer: {
    color: '#fcfdff',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '20%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    top: '20%',
    paddingBottom: 40,
    borderRadius: 10,
  },
  signIn: {
    top: 0,
    color: '#2d3057',
    margin: 15,
  },
  formItems: {
    marginTop: 15,
    marginLeft: 0,
    borderBottomColor: '#2d3057',
  },
  Input: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },
  loginAs: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    paddingLeft: 46.6,
  },
  loginText: {
    color: '#2d3057',
    fontSize: 10,
    fontFamily: 'GoogleSans-Bold',
    fontWeight: 'bold',
  },
  cboxText: {
    fontFamily: 'GoogleSans-Medium',
    fontSize: 10,
  },
  Button: {
    padding: 30.8,
    borderRadius: 5,
  },
  mainBtn: {
    backgroundColor: '#1DDCAF',
  },
  btnText: {
    color: '#2D3057',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
  },
  cboxBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
