import React, { Component } from 'react';




class MovieValuesComponent extends Component 
{

  render() 
  {
  	/*Stroring the values which are retrieved from the api after mapping it into a separate variable.*/
  	const mapping = this.props.movie.map(function(data) {
  				console.log(mapping);
				console.log(typeof(data));
				console.log(data.Title +"title");
					console.log(data.Year +"year");

			return(

				<ol key={data.imdbID} className="item">
                   									{/*Displaying the data in the browser containing title  of the movie and year of the movie along with the poster of movie.*/}
								                   <h4>POSTER: <th><img src={data.Poster} alt="" width="200px" /></th></h4>
								                   <h4> TITLE : <th id="title">{data.Title} </th></h4>
								                   <h4> YEAR : <th id="year">{data.Year}</th></h4>
								                   
								              
              
				</ol>
					
				);
		}.bind(this));
/*Returning the stored data for appropriate displaying of the data.*/
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

/*exporting this component for its usability in other files.*/
export default MovieValuesComponent;
