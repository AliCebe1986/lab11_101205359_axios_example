import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div>
                <div className="bg-success text-white text-center py-3 mb-4">
                    <h1>User List</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.persons.map(person => (
                            <div className="col-md-6 mb-4" key={person.email}>
                                <div className="card bg-primary text-white p-3 shadow">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={person.picture.large}
                                            alt={`${person.name.first} ${person.name.last}`}
                                            className="rounded-circle me-3"
                                            style={{ width: '80px', height: '80px' }}
                                        />
                                        <div>
                                            <h4>{`${person.name.first} ${person.name.last}`}</h4>
                                            <p className="mb-1">Email: {person.email}</p>
                                            <p className="mb-1">Phone: {person.phone}</p>
                                            <p>Location: {`${person.location.city}, ${person.location.country}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonList;
