import React, { Fragment } from 'react';
import Home from './src/pages/home';
import { StatusBar } from 'react-native';

export default function APP() {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <Home/>
    </>
  )
}