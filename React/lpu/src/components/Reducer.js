import React, { useReducer } from 'react';
function reducer(state, action) {
  switch (action.field) {
    case 'name':
      return { ...state, [action.field]: action.value };

    case 'email':
      return { ...state, [action.field]: action.value };
    
    case 'pass':
      return { ...state, [action.field]: action.value };
    
    default:
      return state;
  }
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    pass: ''
  });
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.name} name="name" id="name" placeholder="Name" onChange={(e) => dispatch({ field: 'name', value: e.target.value })}/>
        <br />
        <input type="email" value={state.email} name="email" id="email" placeholder="Email" onChange={(e) =>dispatch({ field: 'email', value: e.target.value })}/>
        <br />
        <input type="password" value={state.pass} name="pass" id="pass" placeholder="Password" onChange={(e) =>dispatch({  field: 'pass', value: e.target.value })}/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}