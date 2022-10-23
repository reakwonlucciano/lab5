//import react 
import React from "react";
import { Books } from "./books"; // imports books component and used down below <books>
import axios    from 'axios'  // for json to ask for info asynchronous

// class for the read component// extends word used to export app.js
export class Read extends React.Component{
    
    
componentDidMount() {
    
    // get the json blob
    axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
    
    
   // then set the respons onto the state movie array and that will display
    .then((res)=>{
        this.setState({
            books:res.data
        })
    }
    )
    
    // shows what error if something goes wrong
    .catch((error)=>{
        console.log(error)
    });

  } // didmount

  // state to store data in this class
  state = { 
      
    // books holding json data about 3 books.
    books:[]
  
  }
    
    render(){
        
         // returning component

        // books data in read component, have <books> here that connects the two components
        // with the "<Books books ={this.state.book}> " sends the data in the read component (state) and send it to
        // the books class/component where it sends back the formatted book data from the bookItem component that's inbeeded in it and sent back to the read component which has a page on the website
        // that will show the book data that was formatted and sent back

        
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        ); //return 
    } // render
} //class
