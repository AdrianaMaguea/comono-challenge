import React from 'react';

class Tablerow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.age}</td>
                <td>{this.props.sport}</td>
            </tr>
        )
    }
}

export default Tablerow;