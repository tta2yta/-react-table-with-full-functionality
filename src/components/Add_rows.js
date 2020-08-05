import React, {Component} from 'react' 

class Add_rows extends Component {

  constructor(props){
    super(props);

    this.state={
      id:0,
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      address:[],
      btntext:'Add',
      searchrows:'',
      addbtn:true
    
    }
  }

  handleid = (event) => {
    this.setState({id: event.target.value});
    this.addbtnenabler();
  }
  handlefirstname = (event) => {
    this.setState({firstName: event.target.value});
    this.addbtnenabler();
  }
   handlelastname = (event) => {
    this.setState({lastName: event.target.value});
    this.addbtnenabler();
  }
 handleemail = (event) => {
    this.setState({email: event.target.value});
    this.addbtnenabler();
  }
  handlephone = (event) => {
    this.setState({phone: event.target.value});
    this.addbtnenabler();
  }
  handleaddress = (event) => {
    this.setState({address: event.target.value});
    this.addbtnenabler();
  }
 

  addbtnenabler=(event)=>{
  
    if(this.state.id !=='' && this.state.firstName !=="" && this.state.lastName !=="" && this.state.email !==""
    && this.state.phone !=="" ){
      this.setState({addbtn:false});
    }
    else
    this.setState({addbtn:true});
  }


   addrow = () => {
     if(this.state.id !=='' && this.state.firstName !=="" && this.state.lastName !=="" && this.state.email !==""
    || this.state.phone !==""){
     this.setState({addbtn:true});
    const singlerow={id: this.state.id, firstName:this.state.firstName, lastName:this.state.lastName
      , email:this.state.email, phone:this.state.phone, address:this.state.address};
  this.props.synch_posts(singlerow)
    }
    else
    alert("Please Enter Correct Values");
  }

    render() {
     const {id, firstName, lastName, phone, email, addbtnenabler, addbtn}= this.state;
          return(
        
      <div className="addrows">                 
      <form>
        <input type="text" placeholder="ID" id="id"  onChange={this.handleid} value={id} onKeyUp={this.state.addbtnenabler} />
        <input type="text" placeholder="First Name" id="firstname "  onChange={this.handlefirstname} value={firstName} onKeyUp={this.addbtnenabler} />
        <input type="text" placeholder="Last Name" id="lastname"  onChange={this.handlelastname} value={lastName} onKeyUp={this.addbtnenabler} />
        <input type="text" placeholder="Email" id="email"  onChange={this.handleemail} value={email} onKeyUp={this.addbtnenabler} />
        <input type="text" placeholder="Phone" id="phone"  onChange={this.handlephone} value={phone} onKeyUp={this.addbtnenabler} />
        {/* <input type="text" placeholder="Address" id="address"  onChange={this.handleaddress} value={this.state.address} onBlur={this.addbtnenabler} /> */}
        <input type="button" className="add_btn" value="Add" onClick={this.addrow} disabled={addbtn} />
      </form>
      </div>
            
      
          )
      }
    }
export default Add_rows
