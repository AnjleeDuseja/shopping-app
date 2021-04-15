import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { Button,  List, ListContent } from 'semantic-ui-react'


function Cart (){
    return(
   <div>
  <h1 style={{margin: '5px'}}>Shopping Cart</h1>

  <List style={{padding: '25px'}} >
   
   
  {
  data.map(item => (<List.Item >

    <List.Content floated='right'> <Button icon='cart arrow down' /> </List.Content>

      <List.Content floated='left'>{item.product}</List.Content>

      <List.Content floated='right'>{item.price}</List.Content>
    
  </List.Item>))}
    
  
  </List>

  </div>
);
}

export default Cart