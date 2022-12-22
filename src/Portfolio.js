import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import Toolbar from './Toolbar.js'

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
        const buttons = filters.map(el => {return (<button key={ uuid() } id={ el }>{ el }</button>)});
        return (
            <Toolbar foo={(event) => {this.onSelectFilter(event.target.textContent)}} btns={ buttons } sel={ selected } />
        )
    }
}

export default Portfolio;
