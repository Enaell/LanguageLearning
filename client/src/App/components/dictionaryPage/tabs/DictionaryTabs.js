import React, {useState, useEffect} from 'react';
import { Column } from 'simple-flexbox';
import translate from 'counterpart';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import OrderList from './OrderList';
import { Filter, DualSwitch } from 'App/components/common/GenericComponents';

const firstLetterSortedDictionary = dictionary => {
  
  let sortedDictionary = {}

  dictionary.forEach(word => {
    if (!sortedDictionary.hasOwnProperty(word.globalName.charAt(0)))
      sortedDictionary[word.globalName.charAt(0)] = [];
    sortedDictionary[word.globalName.charAt(0)].push(word);
  });
  return sortedDictionary;
}

const subjectSortedDictionary = dictionary => {

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

const alphabeticSort =  (a, b) => a.globalName > b.globalName;

const levelSort = (a, b) => a.level > b.level;

const filteredWords = (words, filter) => {

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
  return words;
};


const DictionaryTabs = ({words}) =>{

  const alphabeticOrderText = translate('dictionaryPage.alphabeticOrder');
  const levelOrderText = translate('dictionaryPage.levelOrder');

  const switchValues = [alphabeticOrderText, levelOrderText];

  const sortBySwitchValue = {
    alphabeticOrderText: alphabeticSort,
    levelOrderText: levelSort
  }

  const [dictionary, setDictionary] = useState(words);

  const [filter, setFilter] = useState('');

  const handleSubFunctionChange = value => {
    setDictionary(dictionary.sort(sortBySwitchValue[value]));
  }

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
      style={{width: '100%', maxWidth: '100%'}}
    >
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

      {words.length > 0 && 
      <>
        <Filter setFilter={setFilter} filter={filter} />
        <DualSwitch values={[switchValues[0], switchValues[1]]} changeSelectedValue={handleSubFunctionChange}/>
      </>
      }

      {tabNumber === 0 && dictionary && <OrderList dictionary={dictionary} sortDictionary={firstLetterSortedDictionary}  />}
      {tabNumber === 1 && dictionary && <OrderList dictionary={dictionary} sortDictionary={subjectSortedDictionary} />}
    </Column>
  )
}

export default DictionaryTabs;
