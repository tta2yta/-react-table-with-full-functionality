import React,{Component} from 'react'

class Findrows extends Component {
  constructor(props){
    super(props);

    this.state={
      filterposts:[],
      address:[],
      searchfield:''
    
    }
  }

  handlesearchrows = (event) => {
    this.setState({searchfield: event.target.value});
    const val= event.target.value;
    if(val==''){
    
    this.props.synch_search_posts(this.props.posts,"");
    }
  }

  searchrows = () => {
    let res=[]
    const val=this.state.searchfield;
    if(val !=''){
      
     res = this.props.posts.filter(v => v.id == val || v.firstName === val || v.lastName === val ||
     v.email === val || v.phone === val || v.address === val);
     Object.entries(res).length === 0 ? alert("No Record Found"): this.setState({filterposts:res});
     
    }
    else{
     
      this.setState({filterposts:""});
    }
    
    this.props.synch_search_posts(res,val);
   }

  render(){
    const {searchfield}= this.state
    return(

<div className="findrows">
<form>
  <input type="text" placeholder="Enter Value" id="srchid"  onChange={this.handlesearchrows} value={searchfield} />
  <input type="button" className="btn_seacrh" value="Find" onClick={this.searchrows} />
</form>
</div>
    )
}
}
export default Findrows