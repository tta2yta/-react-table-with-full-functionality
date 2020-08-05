import React, {Component} from 'react'

 function Addrow(){
  const {id, handleid, firstName, handlefirstname, lastName,handlelastname, handlephone, phone,
  email, handleemail, addrow, addbtnenabler, addbtn}= this.props
    return(
  
<div className="addrows">                 
<form>
  <input type="text" placeholder="ID" id="id"  onChange={handleid} value={id} onBlur={addbtnenabler} />
  <input type="text" placeholder="First Name" id="firstname "  onChange={handlefirstname} value={firstName} onBlur={addbtnenabler} />
  <input type="text" placeholder="Last Name" id="lastname"  onChange={handlelastname} value={lastName} onBlur={addbtnenabler} />
  <input type="text" placeholder="Email" id="email"  onChange={handleemail} value={email} onBlur={addbtnenabler} />
  <input type="text" placeholder="Phone" id="phone"  onChange={handlephone} value={phone} onBlur={addbtnenabler} />
  {/* <input type="text" placeholder="Address" id="address"  onChange={this.handleaddress} value={this.state.address} onBlur={this.addbtnenabler} /> */}
  <input type="button" value="Add" onClick={addrow} disabled={addbtn} />
</form>
</div>
      

    )
}
export default Addrow