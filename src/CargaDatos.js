import { useState, useEffect } from "react";

export default function CargaDatos(props){
  const url = 'https://dummyjson.com/users/1';
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
				const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();         
          setData(data);
        } else {
          console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        }        				
			} catch(e) {
        console.log("ERROR", e);
			}    
    }

    fetchData();
  }, []);

  return <div>
    <b>Datos cargados de la URL: {url}</b>
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
    </div>
}