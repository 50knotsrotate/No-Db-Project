import React, {Component} from "react";
import "./ConcertsDisplayer.css";

export default class ConcertsDisplayer extends Component {
    constructor (props){
        super(props)
        this.state = {
            artistName: ""
        };
    }
    render() {
        const {
           name,
           date,
           content,
           concertId,
           idcomment
        } = this.props;
        return(
            <div className = "ConcertsParent">
                <div>{name}</div>
                <div>{date}</div>
                 <div>{content}</div>
                <div>{concertId}</div>
                <h1>{idcomment}</h1>
            </div>
        )
    }
}