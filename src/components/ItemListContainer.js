import './ItemListContainer.css'
import React from 'react'
import Item from './Item'

class ItemListContainer extends React.Component {


    render() {
        return (
            <div className="itemListContainer">
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