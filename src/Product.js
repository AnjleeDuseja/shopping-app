import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { Button,  List } from 'semantic-ui-react'
import data from './data/MOCK_DATA.json'

function Product (){
    return(
   <div>
       <h1 style={{margin: '5px'}}>Products</h1>
  <List style={{padding: '25px'}} >
   
  {data.map(s => (<List.Item >

    <List.Content floated='right'> <Button icon='cart arrow down' /> </List.Content>

      <List.Content floated='left'>{s.product}</List.Content>

      <List.Content floated='right'>{s.price}</List.Content>
    
  </List.Item>))}
    
  
  </List>

  </div>
);
}

export default Product