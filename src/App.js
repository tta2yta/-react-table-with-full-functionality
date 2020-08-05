import React, {Component } from 'react';
import Findrows from "./components/Findrows";
import './App.css';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Add_rows from './components/Add_rows'
import Selectedrow from './components/Selectedrow'

 class App extends Component {
   constructor(props){
     super(props);

     this.state={
       posts:[],
       filterposts:[],
       address:[],
       btntext:'Add',
       searchrows:'',
       selected_index:'',
       selected_row:[],
       selected:0
     
     }
   }

componentDidMount(){
  const url="http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
  fetch(url, {
    method:"GET"}).then(response=> response.json()).then(posts=>{
     this.setState({posts: posts})
    });
  }


  selectedrow=(state, rowInfo) => {
    if (rowInfo && rowInfo.row) {
      return {
        onClick: (e) => {
          this.setState({selected_row:""})
          this.setState({
            selected_index: rowInfo.index
          })
          this.state.posts.find((item, i)=>{
if(i==rowInfo.index){
this.setState({selected_row:item})
this.setState({address:item.address})
this.setState({selected:rowInfo.index})
}
          });

        },
        style: {
          background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
          color: rowInfo.index === this.state.selected ? 'white' : 'black'
        }
      }
     
    }else{
      return {}
    }

   
  }

   synch_posts=(singleposts)=>{
    this.setState({posts: [singleposts, ...this.state.posts]});
  }
  synch_search_posts=(posts_results,searchrows)=>{
    this.setState({searchrows:searchrows});
    this.setState({filterposts:posts_results});
  }


  render(){
    const columns=[
      {
        Header:"ID",
        accessor:"id",
        filterable:true,
        width:150,
        maxwidth:50
      },
      {
        Header:"First Name",
        accessor:"firstName",
        filterable:true,
        width:150,
        maxwidth:50
      },
      {
        Header:"Last Name",
        accessor:"lastName",
        filterable:true
      },
      {
        Header:"Email",
        accessor:"email",
        filterable:true
      },
      {
        Header:"Phone",
        accessor:"phone",
        filterable:true
      },
      {
        Header:"Address",
        id: "Address",
       // accessor: posts=>posts.address !=="" ? ` ${posts.address.streetAddress}  ${ posts.address.city}` : "",
        accessor: posts=>posts.address !=="" ? ` ${posts.address.streetAddress}` : "",
        filterable:true
      }

    ];
const {id, firstName,lastName, email, phone, address}= this.state;
    return(
      <>
<Add_rows posts={this.state.posts} synch_posts={this.synch_posts.bind(this)} />
     <Findrows posts={this.state.posts} synch_search_posts={this.synch_search_posts.bind(this)} />

      <ReactTable columns={columns} data={ this.state.searchrows==''? this.state.posts: this.state.filterposts==''? this.state.posts:this.state.filterposts} 
      showPaginationTop  
      defaultPageSize={10}
      getTrProps={this.selectedrow}
      noDataText={"Data is Loading Please wait...."}
      pageSizeOptions= {[5, 10, 20, 25, 50]}
            />
<Selectedrow   selected_row={this.state.selected_row} address={this.state.address}/>

</>
    )
  }

}

export default App;