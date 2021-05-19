function Links(props) {
  const isConnected = false;
  return (
    <ul>
      {isConnected
        ? props.connected.map((x) => <li> {x}</li>)
        : props.notConnected.map((x) => <li> {x}</li>)}
    </ul>
  );
}

/*
  array.map()
  array.filter()
  array.reduce()
  array.find()
  array.findIndex()
  array.includes()
  array.indexof()
  array.join()
  ...
*/

/*

const array = ["Chreyd", "youssra", "nawfel"]

array.map(x => x + "2021") 
===>  ["Chreyd2021", "youssra2021", "nawfel2021"]
                     <===>
array.map(x =>  { 
  return x + "2021"
})

*/

export default Links;
