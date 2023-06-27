import React from 'react';

const Card = (props) => (
        // TODO: Add the description inside an HTML <p> 
        // TODO: Add the website info as an HTML <a> just below the <h2>
        <aside className="Card" >
            <h2>{ props.title }</h2>
            

            <div className="ItemList"> 
              {props.children}
            </div>
        </aside>
)
export default Card
//Usage sample: <Card title="New Technologist" description="Friends from the TNT program" website="https://newtechnologists.com/"/>

  
