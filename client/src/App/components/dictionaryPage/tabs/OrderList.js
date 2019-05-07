import React, { useState, useCallback, useEffect } from 'react';
import CollapseListByLetter from './CollapseListByLetter';
import { Row } from 'simple-flexbox'

const OrderList = ({dictionary, sortedDictionary}) => {

  const [listOfWords, setlistOfWords] = useState(sortedDictionary(dictionary));

  useEffect(() => setlistOfWords(sortedDictionary(dictionary)), [dictionary])

  return (
    <Row wrap horizontal='center' style={{maxWidth: '1150px', marginTop: '50px'}}>
      {listOfWords && Object.keys(listOfWords).length > 0 && Object.keys(listOfWords).map((listByFirstLetter) =>(
        <CollapseListByLetter style={{ margin: '15px'}} key={listByFirstLetter} letter={listByFirstLetter} wordListByFirstLetter={listOfWords[listByFirstLetter]} />
      ))}
    </Row>
  )
}

export default OrderList;