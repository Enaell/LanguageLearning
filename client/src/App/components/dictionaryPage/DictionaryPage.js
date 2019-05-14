import React, { useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import translate from 'counterpart';
import  { PageTitle }  from '../common/GenericComponents';
import DictionaryTabs from './tabs'
import WordPreview from './wordPreview'


const DictionaryPage = ({user, getAllWords}) => {

  useEffect(()=>{
    const token = user.id ? user.id : null;
    getAllWords('cn', token);
    },[]);

  return(
    <Column horizontal='center'>
      <PageTitle title={translate('dictionaryPage.title')} ></PageTitle>
      <Row>
        <DictionaryTabs />
        {/* <WordPreview  /> */}
      </Row>
    </Column>
  );
}

export default DictionaryPage;