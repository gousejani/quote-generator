import React, { Component } from 'react'

export default class Quote extends Component {
    
    render() {
        const msg =  '"' + this.props.quote.quote + '" -'+this.props.quote.author;
        console.log(msg);
        const twitterHref = "http://twitter.com/intent/tweet?text=" + msg;// 
        return (
            <div className = "quote-main-container">
                <div className = "quote">
                    <i className="fa fa-quote-left"></i>
                    {this.props.quote.quote}
                    <i className="fa fa-quote-right"></i>
                </div>
                <div className = "author">
                    -
                    {this.props.quote.author}
                </div>
                <div className = "buttons">
                    <div className ="social-media">
                    <a href={twitterHref} target="_blank"><i className="fa fa-twitter-square"></i></a>
                    </div>
                    <div className = "new-quote">
                        <button onClick = {this.props.newQuote}>
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};
