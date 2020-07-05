import React, {useState, useCallback, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';

import Color from 'themes/Color';

const Container = props => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View {...props} style={styles. container}>
          {props.children}
        </View>
        {props.isLoading &&  (
          <View style={styles.fullScreen}>
            <ActivityIndicator size="large" color={Color.primary}/>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = {
  fullScreen: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
    borderRadius:15,
    zIndex: 9,
  },
  container: {
    flex: 1,
  },
  zIndex: {
    flex: 1,
    zIndex: 0,
  },
};
export default Container;
