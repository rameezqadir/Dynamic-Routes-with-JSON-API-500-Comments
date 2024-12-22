import Navbar from "./Navbar"
import Link from "next/link"

// export default async function Home (){

//  //making api request
//   const url = await fetch ("https://simple-books-api.glitch.me/books", {
//     method: "GET"
//   })
//  //converting it in to JSON
//   const res= await url.json()
//  console.log (res)
//   return (
//    <main>
//     Hello
//     </main>
//   )
// }

// async function Home2 (){
//   const url= await fetch ("https://simple-books-api.glitch.me/books")
//   const res=await url.json()
//   console.log (res)
//   return(
//     <main>
//       Second A sync Function
//     </main>
//   )
// }

export default async function Appi(){
  // const url = await fetch ("https://simple-books-api.glitch.me/books")
  const url2= await fetch ("https://jsonplaceholder.typicode.com/comments/"
    , {method: "GET"}
  )
  // const url3=await fetch ("https://simple-books-api.glitch.me/books")
  
  // const res = await url.json()
  const res2 = await url2.json()
  // const resp3 = await url3.json()
  
  // console.log (res)
  console.log (res2)
  // console.log (resp3)
  
  return(
    <main>
      
      {
      res2.map((comments:any)=>(
<div>
  <Link href={`${comments.id}`}>
  
    <h1 className="text-blue-900">User ID: {comments.postId} </h1>
    <h1 className="text-red-900">ID: {comments.id}</h1> 
    <h1 className="text-green-900">Name: {comments.name}</h1>
    <h1 className="text-orange-900">Email: {comments.email}</h1>
    <h1 className="text-black">Body: {comments.body}</h1>
    </Link>
  
</div>
      ))

     } 
    </main>
    
  )
}

// export default async function Home (){
// const url = await fetch ("https://simple-books-api.glitch.me")
// const res = await url.json()
// console.log (res)

//   return(
//     <div>
// <h1>{JSON.stringify(res)}</h1>
//     </div>
//   )
// }

// export default async function Home (){
// const url = await fetch ("https://simple-books-api.glitch.me")
// const res = await url.json()
//   return(
//     <div>
//       <h1>
// {JSON.stringify(res)}
//       </h1>
//     </div>
//   )
// }

// export default async function (){
//   const url= await fetch ("https://simple-books-api.glitch.me")
//   const res= await url.json()

//   return(
//     <div>
//       <h1>
//         {JSON.stringify(res)}
//       </h1>
//     </div>
//   )
// }

// export default async function (){
//   const url = await fetch ("https://dummyjson.com/products")
//   const res = await url.json()
// console.log (res)
//   return(
//     <div>
//       <h1>
//         {JSON.stringify(res)}
//       </h1>
//     </div>
//   )
// }

// export default async function (){
//   const url = await fetch ("https://dummyjson.com/products")
//   const res = await url.json()

//   return(
//     <div>
//       <h1>
//         {JSON.stringify(res)}
//       </h1>
//     </div>
//   )
// }

// export default async function (){
//   const url=await fetch ("https://dummyjson.com/products")
//   const res = await url.json()
//   return(
//     <div>
//       <h1>
//         {JSON.stringify(res)}
//       </h1>
//     </div>
//   )
// }

// export default async function Home (){
//   const url = await fetch ("https://jsonplaceholder.typicode.com/todos/1/posts")
//   const res = await url.json()
//   console.log(res)
//   return(
  
//     <main>
      
//           {
//            res.map((products:any)=>(
//      <div>
       
//        <h1 className="text-3xl">
        
//        </h1>
    
//      </div>
//            ))
    
//           } 
//         </main>
// )}

// export default async function Home (){
//   const url = await fetch ("https://jsonplaceholder.typicode.com/todos/1/todos")
//   const res = await url.json()
//   console.log (res)
//   return(
//     <main>
//       {
//         res.map((todos:any)=>(
// <div>
//   <Link href="{`${users.email}`}">
//   <h1>
//   {todos.id},{todos.title},

//   </h1></Link>
// </div>
//         )
      
//       )
//       }
//     </main>
//   )
// }