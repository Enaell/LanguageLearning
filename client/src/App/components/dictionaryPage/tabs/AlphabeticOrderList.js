import React, { useState, useCallback, useEffect } from 'react';
import CollapseListByLetter from './CollapseListByLetter';


const orderedDictionary = (dictionary) => {
  console.log('dictionary in ordered function');
  console.log(dictionary);

  let sortedDictionary = {}
  // if (!dictionary)
  //   return sortedDictionary;
  dictionary.map(word => {
    if (!(sortedDictionary.keys && sortedDictionary.keys.includes(word.globalName.charAt(0))))
      sortedDictionary[word.globalName.charAt(0)] = [];
    sortedDictionary[word.globalName.charAt(0)].push(word);
  });
  console.log(sortedDictionary);
  return sortedDictionary;
}

const AlphabeticOrderList = ({dictionary}) => {
  
  //console.log(orderedDictionary({dictionary}));
  console.log('alphabetic order entry');
  console.log(dictionary);

  const [listOfWords, setlistOfWords] = useState(orderedDictionary(dictionary));

  useEffect(() => {setlistOfWords(orderedDictionary(dictionary)); console.log('coucou' + orderedDictionary(dictionary))}, [dictionary])

  // useCallback(() => {
  //       console.log('useCallback');
  //       setlistOfWords(orderedDictionary(dictionary));
  //     }, [dictionary]);

  console.log('listOfWords')
  console.log(listOfWords);

  return (
    <div>
      {listOfWords && Object.keys(listOfWords).length > 0 && Object.keys(listOfWords).map((listByFirstLetter) =>(
        <CollapseListByLetter key={listByFirstLetter} letter={listByFirstLetter} wordListByFirstLetter={listOfWords[listByFirstLetter]}></CollapseListByLetter>)
      )}
    {/* <List>
    {dictionary.map((tr) => <Translation translation={tr} key={tr} selectAnswer={onAnswerSelected} />
    )}
  </List> */}
  </div>
  )
}

export default AlphabeticOrderList;