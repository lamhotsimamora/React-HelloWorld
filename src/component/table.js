export default function Navbar({todos}){
  
    const deleteProduct = (id)=>{
        console.log('delete '+id)
    }

    return <table className="table">
    <thead>
      <tr>
        <th scope="colSpan">ID</th>
        <th scope="colSpan">Title</th>
        <th scope="colSpan">Action</th>
      </tr>
    </thead>
    <tbody>
     
        {todos.map((todos,index)=>(
            <tr key={todos.id}>
                <td>{todos.id}</td>
                <td>{todos.title}</td>
                <td>
                  <button onClick={()=>deleteProduct(todos.id)} className="btn btn-danger btn-sm">x</button>
                </td>
            </tr>
        ))}
        
      
    </tbody>
  </table>
}