import React from "react"
import customCategoriesArray from "../../constants/customCategories";


class CategorySelection extends React.Component{
state={
  categories: []
}


handleSelection =(event )=>{
  this.setState({
    categories: event.target.value
  })
  this.props.handleChange(this.state.categories)
}
render(){
  return(
    <select
    onChange={this.handleSelection}
    value={this.props.customCategories}
    className="custom-select custom-select-mg mt-3"
    name="customCategories"
  >
    {customCategoriesArray.map((category, key) => {
      return (
        <option key={key} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
          {}
        </option>
      );
    })}
  </select>
   ) 
}
 

}

export default CategorySelection