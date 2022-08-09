import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from '../components/Scroll'
import './App.css';
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:[],
            searchField: '',
            date:new Date(),
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({robots:users}))
}
    onsearchChange =(event) => {
        this.setState({searchField:event.target.value})
    }
    render () { 
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!robots.length){
            return<h1>Loading</h1>
        }
        else{
    return (
    <div className="tc"> 
    <h1>Robot-friends</h1>
    <h2>It's {this.state.date.toLocaleDateString()}</h2>
    <SearchBox searchChange = {this.onsearchChange}/>
    <Scroll>
    <CardList robots = {filteredRobots}/>
    </Scroll>
    </div>
    )
        }
    }
}

export default App   