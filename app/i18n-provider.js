// app/i18n-provider.js
'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n-config'; // Create this file

export default function I18nProvider({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}