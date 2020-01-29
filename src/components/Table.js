import React from 'react';
import Tablerow from './Tablerow';
import data from '../data/subscribers'

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data };
    }

    render() {
        return (
            <table>
                {
                    this.state.data.map( el => {
                        return (
                            <tbody>
                                <Tablerow
                                    name = {el.name}
                                    lastName = {el.lastName}
                                    age = {el.age}
                                    sport = {el.sport}
                                ></Tablerow>
                            </tbody>
                        )
                    })
                }
            </table>
        )
    }
}

export default Table;