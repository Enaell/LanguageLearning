import React from 'react';
import { Column } from 'simple-flexbox';
import translate from 'counterpart';
import  {PageTitle, PageDescription}  from '../common/GenericPageComponents'


const DictionaryPage = () => {
  return(
    <Column horizontal='center'>
      <PageTitle title={translate('dictionaryPage.title')} ></PageTitle>
    </Column>);
}

export default DictionaryPage;