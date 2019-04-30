import React, {useEffect} from 'react';
import { Column } from 'simple-flexbox';
import translate from 'counterpart';
import  {PageTitle, PageDescription}  from '../common/GenericPageComponents';
import DictionaryTabs from './tabs/DictionaryTabs'

const DictionaryPage = ({user, getAllWords}) => {

  useEffect(()=>{
    const token = user.id ? user.id : null;
    getAllWords('cn', token);
    },[]);

  return(
    <Column horizontal='center'>
      <PageTitle title={translate('dictionaryPage.title')} ></PageTitle>
      <DictionaryTabs></DictionaryTabs>
    </Column>);
}

export default DictionaryPage;