import React, {useState, useEffect} from 'react';
import { Column } from 'simple-flexbox';
import translate from 'counterpart';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import OrderList from './OrderList';
import InputBase from '@material-ui/core/InputBase';


const firstLetterSortedDictionary = (dictionary) => {
  
  let sortedDictionary = {}

  dictionary.forEach(word => {
    if (!sortedDictionary.hasOwnProperty(word.globalName.charAt(0)))
      sortedDictionary[word.globalName.charAt(0)] = [];
    sortedDictionary[word.globalName.charAt(0)].push(word);
  });
  return sortedDictionary;
}

const subjectSortedDictionary = (dictionary) => {

  let sortedDictionary = {}
  
  dictionary.forEach(word => {
    (word.subject).forEach(subject => {
      if (!sortedDictionary.hasOwnProperty(subject))
        sortedDictionary[subject] = [];
      sortedDictionary[subject].push(word);
    });
  })
  return sortedDictionary;
}

const filteredWords = (words, filter) => {
  console.log(words);

  if (filter && filter.length > 0) {
    return (
      words &&
      words.filter(word => {
        const rgxp = new RegExp(filter.toLowerCase());
        const wordName = word.name.toLowerCase();
        const wordGlobalName = word.globalName.toLowerCase();
        return wordName.match(rgxp) || wordGlobalName.match(rgxp);
      })
    );
  }
  console.log(words);
  return words;
};


const DictionaryTabs = ({words, classes}) =>{
  
  const [dictionary, setDictionary] = useState(words)

  const [filter, setFilter] = useState('');

  useEffect(() => {
    setDictionary(filteredWords(words, filter))
  }, [filter, words]);


  const [tabNumber, setTabNumber] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabNumber(newValue);
  }


  return (
    <Column
      horizontal='center'
    >
      <Tabs
      style={{maxWidth: '1150px'}}
      value={tabNumber}
      onChange={handleTabChange}
      indicatorColor="primary"
      textColor="primary"
      centered
      >
        <Tab label={translate('dictionaryPage.alphabeticOrder')}/>
        <Tab label={translate('dictionaryPage.subject')}/>
      </Tabs>

      <div className={classes.filter}>
        <p className={classes.filterTitle}>{translate('dictionaryPage.filter')}</p>
        <InputBase
          className={classes.filterInput}
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      {tabNumber === 0 && dictionary && 
        <OrderList dictionary={dictionary} sortDictionary={firstLetterSortedDictionary} />
      }
      {tabNumber === 1 && dictionary &&
        <OrderList dictionary={dictionary} sortDictionary={subjectSortedDictionary} />
      }
    </Column>
  )
}

export default DictionaryTabs;
