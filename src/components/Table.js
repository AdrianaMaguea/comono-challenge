import React from 'react';
import Tablerow from './Tablerow';
import Adriana from './Adriana'; 
import data from '../data/subscribers'


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data };
    }

    render() {
        return (
            <div>
                <Adriana></Adriana>
            
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Sport</th>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map( el => {
                            return (
                                <Tablerow
                                    name = {el.name}
                                    lastName = {el.lastName}
                                    age = {el.age}
                                    sport = {el.sport}
                                ></Tablerow>
                            )
                        })
                    }
                    </tbody>
                </table>
                    <button>Clik Me</button>
                    <button>Clik Me</button>
                    <button>Clik Me</button>
            </div>
        )
    }
}

export default Table;