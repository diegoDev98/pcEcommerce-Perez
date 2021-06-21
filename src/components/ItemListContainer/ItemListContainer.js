import './ItemListContainer.css'
import React, {useEffect,useState} from 'react'
import ItemList from './ItemList/ItemList'
import { useParams } from 'react-router-dom';



const productsData = [{
  id:'1',
  title:'Asus Rog Strix B450-f ',
  description:'A good motherboard......description',
  price:'20000$',
  url:'/images/asusStrixMB.png',
  stock:5,
  category:'pcparts'
},
{
  id:'2',
  title:'Rtx 3080 Ti 12gb',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdamrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit ',
  price:'20000$',
  url:'/images/rtx3080ti.png',
  stock:10,
  category:'pcparts'
},
{
  id:'3',
  title:'IC3 MONITOR 22 " ',
  description:'Detalles del producto<br><ul><li>Monitor 22 Pulgadas HDMI</li> <li>  Color del gabinete Negro mate</li>    <li>  Montaje VESA 75 x 75 mm</li>    <li>  Compatible con Plug & Play</li>    <li></li>   <li>  Tipo DC 12V 2A</li>   <li>  Energía es espera (DPMS) <0.5W </li>   <li>  Consumo de energía: típico 20 W</li>   <li>  Conector VGA + HDMI</li>   <li>  Sincronizar. Señal separada H / V, compuesta SOG</li>   <li>  Señal de video analógica RGB / digital</li>   <li>  Soporte de color 16.7M</li>   <li>  Ángulo de visión 178° / 178° (CR> 10), tecnología IPS</li>   <li>  Tiempo de repuesta (típica) 5 ms</li>   <li>  Resolución 1920 x 1080</li>   <li>  Relación de contraste (típica) 1.000.000:1DCR (1000: 1 CR estático)</li>   <li>  Brillo (típico) 250 cd / m2</li>   <li>  Relación de aspecto 16:9</li>   <li>  Tipo de luz de fondo LED</li>   <li>  Pantalla 21.5 ”Grado A +</li>   <li>  Nuestro monitor IC3 de 22 Pulgadas posee pantalla LED FULL HD con tecnología IPS que brinda nitidez ininterrumpida para una eficiente productividad. Desarrollado para ahorro de energía, con parlantes incorporados de 2 Watts y adaptación para soporte VESA.</li></ul>',
  
  price:'30000$',
  url:'/images/ic3monitor.png',
  stock:4,
  category:'monitors'
},
{
  id:'4',
  title:'intel i7 10000k',
  description:'A good processor.....description',
  price:'50000$',
  url:'/images/inteli7.png',
  stock:20,
  category:'pcparts'
},
{
  id:'5',
  title:'INTEL CORE I5 10600K',
  description:'A good processor description',
  price:'18000$',
  url:'/images/inteli510600.png',
  stock:15,
  category:'pcparts'
},
{
  id:'6',
  title:'The Last of Us Part II ',
  description:'A good game',
  price:'6000$',
  url:'/images/thelastofus2.png',
  stock:30,
  category:'games'
}]

//Array de Objetos se llama productsData


 function ItemListContainer(props) {


  const [products,setProducts] = useState([]); //inicializa products como state
 const {category} = useParams()

  useEffect(() => {
    new Promise( (resolve) => {
      setTimeout(()=>resolve(productsData),50) //en 3 segundos deberia resolver la info de los productos
      
    }).then(
      
      function(productsData) { //luego deberia agarrar la info
        let newProductsData;
        
        (category == 'pcparts')  || (category == 'games') || (category == 'monitors') ? newProductsData = productsData.filter(u => u.category == category): newProductsData = productsData;

        setProducts(newProductsData); //y setearselo a products
                              //esto es para testear que products sea un array de 5 objetos y no vacio
                              //por algun motivo este console devuelve array vacio. Pero si lo hago dentro de el ItemList me devuelve el array lleno. Sin embargo ninguno de los items se renderizan.
        
      }
    )  
  }, [category])
  
//aca pasa array de productos como prop a ItemList para que se renderize en otro componente
return (
  <div className="itemListContainer">
    <div id="headerContainer">
      <h1>{props.greeting}</h1>
    </div>
      <ItemList items={products}> </ItemList>
  </div>
)     
    

}
export default ItemListContainer;