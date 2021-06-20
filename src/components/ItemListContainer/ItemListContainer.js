import './ItemListContainer.css'
import React, {useEffect,useState} from 'react'
import ItemList from './ItemList/ItemList'



const productsData =  [{
  id:'1',
  title:'intel i7 10000k',
  description:'A good processor',
  price:'10000$',
  url:'/images/inteli7.png',
  stock:5
},
{
  id:'2',
  title:'intel i3 10000k',
  description:'A good processor',
  price:'20000$',
  url:'/images/inteli7.png',
  stock:20
},
{
  id:'3',
  title:'intel i5 10000k',
  description:'A good processor',
  price:'30000$',
  url:'/images/inteli7.png',
  stock:13
},
{
  id:'4',
  title:'intel i9 10000k',
  description:'A good processor',
  price:'50000$',
  url:'/images/inteli7.png',
  stock:9
},
{
  id:'5',
  title:'ryzen 3600',
  description:'A good processor',
  price:'18000$',
  url:'/images/inteli7.png',
  stock:2
}]

//Array de Objetos se llama productsData


 function ItemListContainer(props) {


  const [products,setProducts] = useState([]); //inicializa products como state


  useEffect(() => {
    new Promise( (resolve) => {
      setTimeout(()=>resolve(productsData),3000) //en 3 segundos deberia resolver la info de los productos
      
    }).then(
      
      function(productsData) { //luego deberia agarrar la info
        setProducts(productsData); //y setearselo a products
                              //esto es para testear que products sea un array de 5 objetos y no vacio
                              //por algun motivo este console devuelve array vacio. Pero si lo hago dentro de el ItemList me devuelve el array lleno. Sin embargo ninguno de los items se renderizan.
        
      }
    )  
  }, [])
  
//aca pasa array de productos como prop a ItemList para que se renderize en otro componente
return (
  <div className="itemListContainer">
      <h1>{props.greeting}</h1>
      <ItemList items={products}> </ItemList>
  </div>
)     
    

}
export default ItemListContainer;