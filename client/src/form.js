import React, { useState } from "react";

const FavePlayer = () => {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");

  const handleChanges = event => {
    setNewName(event.target.value);
  };

  const changeName = event => {
    event.preventDefault();
    //prevent default here
    setName(newName);
    setNewName("");
    
  };

  return (
    <div className="FavoriteDiv">
    <h1>Who is your favorite player?</h1>
    <h1 className="Name">{name}</h1>
      <form onSubmit={changeName}>
        <div className="FormMid">
          <input
            onChange={handleChanges}
            placeholder="Who do you choose?"
            type="text"
            value={newName}
          />
          <button> Pick Her! </button>            
          
        </div>
      </form>
    </div>
  );
};

export default FavePlayer;