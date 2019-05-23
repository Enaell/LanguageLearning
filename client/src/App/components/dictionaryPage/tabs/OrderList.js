import React, { useState, useEffect } from 'react';
import CollapseList from './collapseList';
import { Row } from 'simple-flexbox'

const OrderList = ({dictionary, sortDictionary}) => {

  const [listOfWords, setlistOfWords] = useState(sortDictionary(dictionary));

  useEffect(() => setlistOfWords(sortDictionary(dictionary)), [dictionary])

  return (
    <Row wrap horizontal='center' style={{maxWidth: '1150px'}}>
      {listOfWords && Object.keys(listOfWords).length > 0 && Object.keys(listOfWords).map((key) =>(
        <CollapseList horizontal='center' style={{ margin: '15px'}} key={key} listTitle={key} wordList={listOfWords[key]} />
      ))}
    </Row>
  )
}

export default OrderList;