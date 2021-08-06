import './ItemListContainer.css'
import React, {useEffect,useState} from 'react'
import ItemList from './ItemList/ItemList'
import Filtro from '../Filtro/Filtro'
import { useParams } from 'react-router-dom';
import { getFireStore } from '../../firebase';



//Array de Objetos se llama productsData


 function ItemListContainer(props) {


  const [products,setProducts] = useState([]); //inicializa products como state
 const {category} = useParams()

  useEffect(() => {
    const db = getFireStore();
    let itemCollection=db.collection('items');
    if(category!==undefined && category!=='home') {
      itemCollection= itemCollection.where('category','==',category) 
    }
   
    
    itemCollection.get().then(
      (querySnapshot)=> {
        if(querySnapshot.size===0){
          console.log('No results!')
        }
        setProducts(querySnapshot.docs.map(doc=>doc.data()));
      }).catch((error)=>{
        console.log('error searching items',error);
      })
     
  }, [category])
  
//aca pasa array de productos como prop a ItemList para que se renderize en otro componente
return (
  <>
      <div id="headerContainer">
        <h1>{props.greeting}</h1>
      </div>
    <div className="maincontainer">
      <Filtro />
      <div className="itemListContainer">
          <ItemList items={products}> </ItemList>
      </div>
    </div>
  </>
)     
    

}
export default ItemListContainer;