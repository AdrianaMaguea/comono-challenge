import React from 'react';
import Tablerow from './Tablerow';
import Header from './Header'; 
import data from '../data/subscribers'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data };
    }

    sortByName() {
        console.log('sort by name');
    }

    sortByAge() {
        console.log('sort by age');
    }

    sortBySport() {
        console.log('sort by sportb');
    }

    render() {
        return (
            <div>
                <Header name = "Adriana Maguea"></Header>
                <div className = "container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Sport</th>
                            </tr>
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
                    <button onClick={this.sortByName}>Sort by name</button>
                    <button onClick={this.sortByAge}>Sort by age</button>
                    <button onClick={this.sortBySport}>Sort by sport</button>
                </div>
            </div>
        )
    }
}

export default App;