import React,  {Component} from 'react';
import './App.css';
import axios from 'axios'; 
import ConcertsDisplayer from './Components/eventsDisplayer/ConcertsDisplayer';


 export default class App extends Component {
   constructor(props){
     super(props)
     this.state = {
       concertsComments: []

     }
   }

   componentDidMount() {
     axios.get('/api/concerts-comments').then((response) => {
       console.log(response.data);
       this.setState({
          concertsComments: response.data
       });
     });
   }

   render(){  
     const mappedconcertsComments = this.state.concertsComments.map(element => {
      return (
      <ConcertsDisplayer
       name = {element.name}
       date = {element.date}
       content = {element.content}
       concertId = {element.concertId}
       idcomment = {element.idcomment}
        />
      );
     });
  return (
    <div className="App">
    <div>
      <header className="Header">Events</header>
    </div>
    <main>
    <div className="Body">{mappedconcertsComments}
    </div>
    </main>
      </div>
  );
}}


