import React, { Component } from 'react'


class Selectedrow extends Component{

    render(){
    const {selected_row, address}=this.props
     
    return(

    <>
     {
        
        Object.entries(selected_row).length > 0 &&  selected_row.constructor === Object ?(
        <div>
        <h3>Selected Result Row of The Table</h3>
         <ul>
       <div>
     <li id="name">Выбран пользователь <b>{selected_row !==""? selected_row.firstName + " " + selected_row.lastName : " "}</b></li>
        <li id="desc"> Описание:<textarea value={selected_row.description!==undefined ? selected_row.description : ""} onChange={()=>{}} ></textarea></li>
        <li id="stradd">Адрес проживания:  <b>{address.streetAddress } </b></li>
        <li id="cty">Город: <b>{address.city } </b></li>
        <li id="sts">Провинция/штат: <b>{address.state} </b></li>
        <li id="pid">Индекс: <b>{selected_row.id} </b></li>
     </div>
      </ul> 
      </div>
     ): null }
      
   
        </>
    );
}
}
export default Selectedrow