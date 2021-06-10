import './ItemListContainer.css'
import React from 'react'
import Item from '../Item/Item'

class ItemListContainer extends React.Component {


    render() {
        return (
            <div className="itemListContainer">
                <h1>{this.props.greeting}</h1>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
                <Item name="CPU" src="./images/inteli7.png" desc="A cool cpu"/>
     
            </div>
        )
    }

}
export default ItemListContainer;