import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import ProjectList from './ProjectList';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: ["All", "Websites", "Flayers", "Business Cards"],
            selected: 'All'
        }
    }

    onSelectFilter(filter) {
        
        this.setState({selected: filter}) 
    }

    render() {
        const { selected, filters } = this.state;
        const btns = filters.map(el => {return (<button key={ uuid() } id={ el }>{ el }</button>)});
        return (
        <div onClick={ (event) => {this.onSelectFilter(event.target.textContent)} }>
            <div>{ btns }</div>
            <div>{ ProjectList(selected) } { console.log(selected) }</div>
        </div>
        )
    }
}

export default Portfolio;
