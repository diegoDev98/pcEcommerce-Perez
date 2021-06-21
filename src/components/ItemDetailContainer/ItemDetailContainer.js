import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

const products =  [{
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
 const getProduct = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 1000);
  });
};

export default function ItemDetailContainer(){
  const [article, setArticle] = useState({});
  const {id}=useParams();
  console.log(id);

  useEffect(() => {

    getProduct()
      .then((products) => {
          const product = products.filter(u => u.id == id);
          console.log(product)
          setArticle(product[0]);
         
      })
      .catch(() => console.log("rejected"));

  }, []);

  return  (
    <div className="itemDetailContainer">
      <ItemDetail initial={1} item={article}/>
    </div>
  );
};


