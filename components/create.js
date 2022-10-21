import React from "react";

export class Create extends React.Component{

    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
        this.onChangeBookTitle =this.onChangeBookTitle.bind(this);
        this.onChangeBookCover=this.onChangeBookCover.bind(this);
        this.onChangeBookAuthour=this.onChangeBookAuthour.bind(this);


        

        this.state = {
            title:'',
            cover:'',
            author:''

        }
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.cover}`);
        console.log(`${this.state.author}`);

        this.setState({
            title:'',
            cover:'',
            author:''

        })
    }

    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }

    onChangeBookAuthour(e){
        this.setState({
            author:e.target.value
        })
    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label>Add Book Title: </label>
                <input type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeBookTitle} 
                    />
            </div>

                <div className="form-group">
                    <label>Add Book cover: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.cover}
                        onChange={this.onChangeBookCover}
                         />
                         </div>  
                         
                <div className="form-group">
                <label>Add Book authour: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.author}
                        onChange={this.onChangeBookAuthour} />
                </div>
                <input type="submit" value="Submit" />
                 </form>
 )}}