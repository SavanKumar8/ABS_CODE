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
  /*Calling the function  by making the AJAX call to the api*/
  fetchmovieValue(moviename) 
  {
    /*Cheking for the input  movie name entered by the user. If it is null then border movie will be displayed as a default movie.*/
    let pathInput = "";
    if(moviename=="")
    {
      pathInput = "border"
    }
    else
    {
   pathInput = moviename;
}
    /*Setting the api with the appropriate input movie name*/
    const path = 'http://www.omdbapi.com/?s='+ pathInput;
    this.setState({tb: true});
    $.ajax({
    
    url: path,
    type: "GET",
    crossDomain: true,
    dataType: 'JSON',

    success : function(msg){
   console.log(msg.Search); 

    console.log(msg.Search);
    /*As the data is retrieved in the search array so setting the state with msg.search*/
    this.setState({movie:msg.Search});
  
    }.bind(this),
    error: function(err){
    console.log("Main-Error Fetching ");
    }
    });
  
  }
    /*Rendring of data=Returning the data to the browser by calling the render function*/

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
 