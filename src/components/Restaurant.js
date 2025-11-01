import { useEffect, useState } from 'react';
import {CLOUD_URL} from './../common/constants'
import restrautList from './../common/mockData'

  const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    resdata
  }) =>{
  //  const {resData} = props;
  //  const { name,cuisines,cloudinaryImageId,lastMileTravelString} = resData?.data
    // console.log(resdata);
   // const [restrautList,setrestrautList] = useState([]);
    //console.log(useState());
    return (
      <div className="card">        
      {/* <img src= { CLOUD_URL +
            cloudinaryImageId} /> */}
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    )
  }
  const RestaurantContainer = () =>{
     const [text,setText] = useState("");
    const [restrautLists,setrestrautLists] = useState(restrautList);
    const [filteredList,setFiltered] = useState([]);
    useEffect(()=>{
      console.log("UseEffect Called");
      fetchData()
    },[])
     function fetchData() {
       setrestrautLists(restrautLists);
       setFiltered(restrautLists);
     }
    
    return (
       
      <div className="res-card" style={{color : "lightblue"}}>
           
         <div className="search">
          <input value={text}
          onChange={(e)=>{
            setText(e.target.value);
          }}
           >
          </input>
          <button onClick={()=>{
            console.log(text)
            const filteredLists = restrautLists.filter((res)=>res.data.name.toLowerCase().includes(text.toLowerCase()))
            setFiltered(filteredLists)
          }}>search</button>
        </div>
        {
          filteredList.map((res)=> <RestaurantCard  key={res.data.id}  resdata= {res} {...res.data}/>)
        }
          <button onClick={
          ()=>{
           // apply filter make only  two here
           const filteredListss = restrautLists.slice(0,2);
            setFiltered(filteredListss)
          }
        }>
          Hello
        </button>
        {/* <RestaurantCard  resData = {restrautList[0]}
        /> */}
      </div>
    )
  
  }
  

  export default RestaurantContainer


// import { useState } from "react";
// import { CLOUD_URL } from "./../common/constants";
// import restrautList from "./../common/mockData";

// // ---------- Restaurant Card Component ----------
// const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
//   return (

    
//     <div className="card">
//       {console.log("Restaurant Card")}
//       <h2>{name}</h2>
//       <h3>{cuisines.join(", ")}</h3>
//       <h4>{lastMileTravelString} minutes</h4>
//     </div>
//   );
// };

// // ---------- Restaurant Container Component ----------
// const RestaurantContainer = () => {
//   const [restaurants, setRestaurants] = useState(restrautList);
//   const [isFiltered, setIsFiltered] = useState(false);
//   const handleFilter = () => {
//     if (!isFiltered) {
//       const filtered = restrautList.slice(0, 2);
//       setRestaurants(filtered);
//     } else {
//       setRestaurants(restrautList);
//     }
//     setIsFiltered(!isFiltered);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 style={{ color: "lightblue" }}>Restaurant List</h1>

//       <button
//         onClick={handleFilter}
//         style={{
//           marginBottom: "20px",
//           padding: "10px 20px",
//           backgroundColor: "lightblue",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         {isFiltered ? "Show All" : "Show Top 2"}
//       </button>
// {console.log("Restauraint Container")}
//       <div className="res-container" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {restaurants.map((res) => (
//           <RestaurantCard
//             key={res.data.id}
//             {...res.data}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantContainer;
