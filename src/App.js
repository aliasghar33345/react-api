import React , {useEffect, useState} from 'react';


function App() {

  const [data , setData] = useState([{}]); 
   
  useEffect(()=> {
  
    async function getrepos(){
      const response = await fetch ("https://api.github.com/users/aliasghar33345/repos");
      const data = await response.json();
       console.log(data);
       setData(data);
    }

    getrepos()
    


    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(response => response.json())
    // .then(json => {
    //      console.log(json);
    //      setData(json);
    // }
    //   )
  } , [] )

  return (
    <div>
     <ul>
       {
         data.map((datasObj , ind)=>{
         return(<li key={ind}>{datasObj.name}</li>)
         })
       }
     </ul>
    </div>
  );
}

export default App;
