import { useEffect, useState } from "react"

export default function Foto() {

    const [foto, setFoto] = useState([]);

    useEffect(()=>{
        loadGambar()
    },[])

    const loadGambar = async () => {
        var loading = document.getElementById('loading');
        loading.setAttribute("class", "spinner-border text-primary");
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setFoto(data);
        loading.setAttribute("class", "");
      }

    return <div className="card">
        <div className="card-body">

        <div id="loading" className="" role="status">
        </div>
        
        <ul className="list-group">
           {foto.map((foto,index)=>(
                <li key={index} className="list-group-item">
                    {foto.title}
                    {/* <img src={foto.url} width="200" height="200" /> */}
                </li>
            ))}  
         
         </ul>
         

        </div>
    </div>
}