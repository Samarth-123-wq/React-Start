import RestaurantContainer from './Restaurant'

const Body = (props) =>{
  console.log(props.children)
    return (
      <div className="body">
       
        <div className="res-container"> 
        <RestaurantContainer />
        </div>
      </div>
    )
  }

  export default Body