import React,{useState,useEffect} from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

const product = {
  id:'5',
  title:'ryzen 3600',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maximedoloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium',
  price:'18000$',
  url:'./images/inteli7.png',
  stock:2
}
 const getProduct = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(product);
    }, 1000);
  });
};

<h1>lorem ipsum</h1>
export default function ItemDetailContainer(){
  const [article, setArticle] = useState({});

  useEffect(() => {

    getProduct()
      .then((product) => {
          setArticle(product);
          console.log(article)
      })
      .catch(() => console.log("rejected"));

  }, []);

  return  (
    <div className="itemDetailContainer">
      <ItemDetail initial={1} item={article}/>
    </div>
  );
};


