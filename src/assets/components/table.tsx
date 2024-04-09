import React from 'react';

const Table: React.FC = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 25, city: 'New York', country: 'USA', occupation: 'Engineer' },
        { id: 2, name: 'Jane Smith', age: 30, city: 'London', country: 'UK', occupation: 'Designer' },
        { id: 3, name: 'Bob Johnson', age: 35, city: 'Sydney', country: 'Australia', occupation: 'Developer' },
    ];

    return (
        <table className='border-2'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Occupation</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                        <td>{item.occupation}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;