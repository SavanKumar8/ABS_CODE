import React, { Component } from 'react';




class MovieValuesComponent extends Component 
{

  render() 
  {

  	const mapping = this.props.movie.map(function(data) {
  				console.log(mapping);
				console.log(typeof(data));
				console.log(data.Title +"title");
					console.log(data.Year +"year");

			return(

				<ol key={data.imdbID} className="item">
                   
                  
		    
					
								                 
								                   <h4>POSTER: <th><img src={data.Poster} alt="" width="200px" /></th></h4>
								                   <h4> TITLE : <th id="title">{data.Title} </th></h4>
								                 <h4> YEAR : <th id="year">{data.Year}</th></h4>
								                   
								              
              
				</ol>
					
				);
		}.bind(this));

    return (
   
      
      <div>
      { //Check if message failed
        (this.props.tb == true)
          ? <div>  
  				{mapping}
		    </div> 
          : <div></div> 
      } 
      </div>
    );
  }
}


export default MovieValuesComponent;
