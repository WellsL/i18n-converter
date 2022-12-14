import React from 'react';
import { getGlobalInstance } from 'plume-ts-di';
import MessageService from '../../../i18n/messages/MessageService';
import scss from './convert-to-xlsx.module.scss'

export default function ConvertToXlsx() {
  const messages = getGlobalInstance(MessageService).t();

  return (
    <>
      <div id={scss.homeLayout}><h1>{messages['home.title']}</h1></div>

    </>
  );
}
