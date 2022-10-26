import React from "react";
import Card from './Card';
import contact from '../contacts'

function App() {
  return (
    <div >
      <h1 className="heading">My Contacts</h1>
      <Card 
      name={contact[0].name} 
      photo={contact[0].imgURL} 
      alt={contact[0].name} 
      phone={contact[0].phone} 
      email={contact[0].email}
      />
      <Card 
      name="Deepak" 
      photo="https://www.tietoevry.com/contentassets/18d5c228d8b74ee182023f7b7484ce4e/profprofile_reducedsize.jpg" 
      alt="deepak" 
      phone="9776753876" 
      email="deepak@king.com"/>
    </div>
  );
}

export default App;
