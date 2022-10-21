import React from 'react'
import axios from 'axios'
import {useState } from 'react'
let url = ' http://127.0.0.1:8000/add/'
const Admin = () => {
 let [name,setName] = useState('')
  let [desc,setDesc] = useState('')
   let [img,setImg] = useState('')
    let [price,setPrice] = useState('')
    let dataSubmit = (e) =>{
    	e.preventDefault()
    	let list = {name,price,desc,img} 
    

    	

    	axios.post(url,list,{
           headers: {
               'content-type': 'multipart/form-data'
           }
        })
    	 .then((response)=>{
    	 	console.log(response.data)
    	 })
    	 .catch((error)=>{
    	 	console.log(error)
    	 })
    }

	return (
		<div>
			<div className="inputfield">
			  <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder="enter name" />
			  <input onChange={(e)=>{setDesc(e.target.value)}} value={desc} type="text" placeholder="enter description"/>
			   <input onChange={(e)=>{setImg(e.target.files[0])}}  type="file"/>
			   <input onChange={(e)=>{setPrice(e.target.value)}} value={price} type="number" placeholder="Rate it"/>
			</div>
			<button onClick={(e)=>dataSubmit(e)} type='submit' className="searchbutton">
               submit
             </button>
		</div>
	)
}

export default Admin