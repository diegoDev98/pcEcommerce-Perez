import './ItemListContainer.css'
import React from 'react'
import Item from '../Item/Item'

class ItemListContainer extends React.Component {


    render() {
        return (
            <div className="itemListContainer">
                <h1>{this.props.greeting}</h1>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={1}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={2}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={3}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={4}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={5}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={6}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={7}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={8}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={9}/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu" initial={1} stock ={10}/>
                
     
            </div>
        )
    }

}
export default ItemListContainer;