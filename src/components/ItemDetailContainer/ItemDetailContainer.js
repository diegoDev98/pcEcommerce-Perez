import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { getFireStore } from '../../firebase';


export default function ItemDetailContainer(){
  const [article, setArticle] = useState([]);
  const {id}=useParams();

useEffect(()=>{
  const db = getFireStore();
  let itemCollection=db.collection('items').where('id','==',parseInt(id));
  itemCollection.get().then(
    (querySnapshot)=> {
      setArticle(querySnapshot.docs.map(doc=>doc.data())[0]);
    }).catch((error)=>{
      console.log('error searching items',error);
    })
},[id])
   

 

  return  (
    <div className="itemDetailContainer">
      <ItemDetail initial={1} item={article}/>
    </div>
  );
};


