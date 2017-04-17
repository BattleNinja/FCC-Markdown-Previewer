import React, { Component } from 'react';
const marked = require('marked');

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            value:' # A large heading \r ## Next largest \r ###### Smallest \
                  \r\r **This is bold text**  \r __So is this__  \
                  \r\r *This text is italicized*  \r _So is this_  \
                  \r\r ~~This was mistaken text~~  \
                  \r\r To quote use  \r > to denote the quoted text  \
                  \r\r Use `backticks` for codes or commands  \
                  \r Use \r ``` \r triple backticks \r for multiple lines \r of code \r ```  \
                  \r\r Create inline links like so  \
                  \r This app was built using [React](https://facebook.github.io/react/index.html)  \
                  \r\r Unordered lists\
                  \r\r * Fish  \r * Chips  \r * Peas\
                  \r\r Nested & ordered Lists\
                  \r\r1. Breakfast\r    - Toast\r    - Cereal  \r2. Dinner\r    * Fish & Chips\r      - Peas\r    * Pie & Chips'
        }

    }
    handlechange(event){
        this.setState({
            value: event.target.value
        });
    }
    createMarkup() {
        return {__html: marked(this.state.value)};
    }
    markeddownvalue() {
        return <div className="text-left" dangerouslySetInnerHTML={this.createMarkup()} />;
    }


    render() {
        return (
            <div className="text-center">
                <h1>Markdown previewer</h1>
                <br/>
                <br/>
                <div className ="row">
                    <div className="col-xs-6 input">
                        <br/>
                        <br/>
                      <textarea value={this.state.value} rows="40" cols="50" onChange={(event)=>{this.handlechange(event)}} />
                    </div>
                    <div className="col-xs-6 output">
                        {this.markeddownvalue()}
                    </div>
              </div>
          </div>
        );
    }
}
