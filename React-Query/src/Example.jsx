import { useQuery } from '@tanstack/react-query';
import React from 'react'

function Example() {

  const Details=async()=>{
    const data= await fetch('https://jsonplaceholder.typicode.com/users')
    const user=await data.json();
    return user;
  }
  const {data,isLoading,isError}=useQuery({
    queryKey:['users'],
    queryFn:Details
  })
  if(isLoading) return <h1>Loading</h1>
  if(isError) return <h1>Error</h1>
  return (
    <>
   {data.map((user) => (
        <div key={user.id}>
          {user.name}</div>
      ))}
      </>

  )
}

export default Example