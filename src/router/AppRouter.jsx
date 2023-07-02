import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomeScreen } from "../home/pages/HomeScreen";
import { AboutUsScreen } from "../home/pages/AboutUsScreen";
import { LoginScreen } from "../auth/pages/LoginScreen";
import { RegisterScreen } from "../auth/pages/RegisterScreen";
import { CartScreen } from '../home/pages/CartScreen';
import { ContactScreen } from '../home/pages/ContactScreen';
import { MenSectionScreen } from '../home/pages/MenSectionScreen';
import { ProductScreen } from '../home/pages/ProductScreen';
import { UnisexSectionScreen } from '../home/pages/UnisexSectionScreen';
import { NavbarMenu } from '../home/components/NavbarMenu';
import { WomenSectionScreen } from '../home/pages/WomenSectionScreen';
import { Error404Screen } from '../Error404Screen';
import { Footer } from '../home/components/Footer';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/aboutUs" element={<AboutUsScreen />} />
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/Cart" element={<CartScreen />} />
          <Route path="/Contact" element={<ContactScreen />} />
          <Route path="/MenSection" element={<MenSectionScreen />} />
          <Route path="/Product" element={<ProductScreen />} />
          <Route path="/UnisexSection" element={<UnisexSectionScreen />} />
          <Route path="/NavbarMenu" element={<NavbarMenu />} />
          <Route path="/WomenSection" element={<WomenSectionScreen />} />
          <Route path="/Error404" element={<Error404Screen />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};