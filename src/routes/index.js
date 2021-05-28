import React from 'react';
import { useSelector } from 'react-redux';
import AppRoutes from '.';
import AuthRoutes from './auth-routes';

export default () => {

    //const { user } = useSelector(state => state.userDetails);

   // return user ? <AppRoutes /> : <AuthRoutes />
   return <AppRoutes />
}
