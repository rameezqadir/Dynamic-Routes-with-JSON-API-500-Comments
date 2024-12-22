// const DynamicBook= async (props:any)=>{
//     console.log (props)
//     const url = await fetch (`https://simple-books-api.glitch.me/books/${props.params.DynamicRouting}`)
//     const res = await url.json()
//     console.log (res)
//     return (
//     <h1 className="text-7xl">{props.params.DynamicRouting}
//     {res.id}</h1>
//     )
// }
// export default DynamicBook

// 1. Hands On
//2. page.tsx all data "GET" /todos
// 3. get single data in Dynamic Route

const DynamicAlbum= async (props:any)=>{
    console.log (props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.DynamicRouting}`)
  
    const res = await url.json()
    console.log (res)
    return (
        
    <div>
    <h1 className="text-lg text-blue-800 text-start">{res.name}</h1>
    <h1 className="text-lg text-blue-800 text-start">{res.email}</h1> 
    <h1 className="text-lg text-blue-800 text-start">{res.body}</h1>
    </div>
    )
}
export default DynamicAlbum