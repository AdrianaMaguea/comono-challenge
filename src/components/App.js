import React from 'react';
import Tablerow from './Tablerow';
import Header from './Header'; 
import data from '../data/subscribers'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data };
    }

    render() {
        return (
            <div>
                <Header name = "Adriana Maguea"></Header>
                <div className = "container">
            
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
                    <button>Sort by name</button>
                    <button>Sort by age</button>
                    <button>Sort by sport</button>
                </div>
            </div>
        )
    }
}

export default App;