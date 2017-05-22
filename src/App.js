import React, { Component } from 'react';
import './App.css';
import './index.css';
import $ from 'jquery';

import MovieValuesComponent from './MovieValuesComponent.js';


class App extends Component 
{
 pathInput="null";
  constructor()
  {


    super();
    this.state={"name":"","movie":[],"tb":false};
    this.handleChange=this.handleChange.bind(this);
    this.fetchmovieValue=this.fetchmovieValue.bind(this);
   
    



  
}

  handleChange(e)
  {
    this.setState({name: e.target.value});
  }
  
  fetchmovieValue(moviename) 
  {
    let pathInput = "";
    if(moviename=="")
    {
      pathInput = "border"
    }
    else
    {
   pathInput = moviename;
}
        const path = 'http://www.omdbapi.com/?s='+ pathInput;
    this.setState({tb: true});
    $.ajax({
    
    url: path,
    type: "GET",
    crossDomain: true,
    dataType: 'JSON',

    success : function(msg){
   console.log(msg.Search);  //consolinng this 
    // for(var i=0 ; i<msg.Search.length;i++)
    // {

    console.log(msg.Search);
    this.setState({movie:msg.Search});
  // }
    }.bind(this),
    error: function(err){
    console.log("Main-Error Fetching ");
    }
    });
  
  }


    
  //   console.log(moviename);
  



  render() {

    return (
      <div className="App">
            <input id="search1" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Type here"/>
            <button type="submit" id="btn1" onClick={() => {this.fetchmovieValue(this.state.name)}}>Go</button>
            
            <MovieValuesComponent movie={this.state.movie} tb={this.state.tb} />
        </div>

    );
  }
}

export default App;
 