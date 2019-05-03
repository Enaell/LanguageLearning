import React, {useState} from 'react';
import { Column } from 'simple-flexbox';
import translate from 'counterpart';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AlphabeticOrderList from './AlphabeticOrderList';

const DictionaryTabs = ({dictionary}) =>{
  
  console.log('dictionary in tabs : ');
  console.log(dictionary);

  const [tabNumber, setTabNumber] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabNumber(newValue);
  }


  return(
    <Column>
      <Tabs
      value={tabNumber}
      onChange={handleTabChange}
      indicatorColor="primary"
      textColor="primary"
      centered
      >
        <Tab label={translate('dictionaryPage.alphabeticOrder')}/>
        <Tab label={translate('dictionaryPage.subject')}/>
      </Tabs>
      {tabNumber === 0 && dictionary && 
        <AlphabeticOrderList dictionary={dictionary} />
      }
      {tabNumber === 1 &&
        <Typography variant="h3" color={'primary'} >tab 1</Typography>
      }
    </Column>
  )
}

export default DictionaryTabs;
