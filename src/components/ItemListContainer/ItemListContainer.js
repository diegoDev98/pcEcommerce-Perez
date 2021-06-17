import './ItemListContainer.css'
import React, {useEffect,useState} from 'react'
import ReactDom from 'react-dom'
import ItemList from './ItemList/ItemList'



const productsData =  [{
  id:'1',
  title:'intel i7 10000k',
  description:'A good processor',
  price:'10000$',
  url:'./images/inteli7.png',
  stock:5
},
{
  id:'2',
  title:'intel i3 10000k',
  description:'A good processor',
  price:'20000$',
  url:'./images/inteli7.png',
  stock:20
},
{
  id:'3',
  title:'intel i5 10000k',
  description:'A good processor',
  price:'30000$',
  url:'./images/inteli7.png',
  stock:13
},
{
  id:'4',
  title:'intel i9 10000k',
  description:'A good processor',
  price:'50000$',
  url:'./images/inteli7.png',
  stock:9
},
{
  id:'5',
  title:'ryzen 3600',
  description:'A good processor',
  price:'18000$',
  url:'./images/inteli7.png',
  stock:2
}]




export default function ItemListContainer(props) {


const [products,setProducts] = useState([]);


  useEffect(() => {
    new Promise( (resolve,reject) => {
      setTimeout(resolve(productsData),3000);
      
    }).then(
      
      function(productsData) {
        setProducts(productsData)
        
      }
    )  
  }, [])
  

return (
  <div className="itemListContainer">
      <h1>{props.greeting}</h1>
      <ItemList items={products}/>
  </div>
)     
    

}
