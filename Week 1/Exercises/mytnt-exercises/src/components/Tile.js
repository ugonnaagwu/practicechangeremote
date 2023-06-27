import React from 'react';
import Counter from "./Counter" 

class Tile extends React.Component {

    render() { 
        return ( 
            <div className="Tile" >
                <h1>Contacts</h1>
                <div>
                    {this.props.children}
                </div>
                <Counter message="&hearts;:" />
            </div>
        )
    }
 }

 export default Tile
 //Usage sample: <Tile> ... Card components go here ... </Tile>
