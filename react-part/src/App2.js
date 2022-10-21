import React from 'react'
import axios from 'axios'
import {useState , useEffect} from 'react'


let url = ' http://127.0.0.1:8000/'
let url2 = ' http://127.0.0.1:8000/search/'
let url3 = ' http://127.0.0.1:8000'

const Searchbar = ()=>{
	
	let [search,setSearch] = useState('')
	let [results,setResults] = useState()
	let [loading,setLoading] = useState(true)

	useEffect(() => {
		return () => {
				axios.get(url)
	      .then((response)=>{
	      setResults(response.data)
	      setLoading(false)
		   

	})
	.catch((error)=>{
		console.log(error)
	})
		};
	}, [url])


	let dataSubmit=(e)=>{
		e.preventDefault()

		axios.post(url2,{searched:search})
		.then((response)=>{
      setResults(response.data)
			console.log(results)
		})
		.catch((error)=>{
			console.log(error)
		})
		setSearch('')
		

	
	}
	console.log(results)
	console.log(loading)

	return(

        <>
        
        <div className="search">

        	   <div className="submit" >
             <button onClick={(e)=>dataSubmit(e)} type='submit' className="searchbutton">
               <img src="search.png" alt="" className="searchicon"/>
             </button>
            </div>


           <div className="input" >
              <input onChange={(e)=>{
             	 setSearch(e.target.value) 
                console.log(e)                                              
                }} 
                className="searchinput" type="text" value={search}
              />
           </div>

        </div>
           
           
           
           <Results data={results} loading={loading}

            />


           
        

        </>
	)
}



let Results=(props)=>{
	
    
	return(
	<>
	<div className="card-holder">
		<div className="cards">
			{  props.loading?
				<h1>loading</h1>
				:
				props.data?
           	props.data.map((maps)=>{
           		return (
           			<div key={maps.id} className="card">
           			   <img className="image" src={url3 + maps.img} alt="" className="image"/>
           				<h1 className="header">{maps.name}</h1>
           				<h1 className="rating">{maps.price}/200</h1>
           				
           			</div>
           		)
           	})
           	:
           	<div className="div">hoynai</div>
           }
		</div>
	</div>
    
           
           	
      
	</>
	)
}

export default Searchbar