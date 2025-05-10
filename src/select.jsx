import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react';
import { Link } from "react-router-dom";

const Select = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/select')
            .then(res => setStudent(res.data))
            .catch(error => {
                console.log('Failed to fetch data');
            });
    }, []);

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:5000/delete/${userId}`)
            .then(res => {
                alert('Deleted');
                setStudent(prev => prev.filter(s => s.userId !== userId));
            })
            .catch(error => {
                console.log('Delete failed');
            });
    };

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className="bg-dark text-white">userId</th>
                        <th className="bg-dark text-white">username</th>
                        <th className="bg-dark text-white">password</th>
                        <th colSpan={2} className="bg-dark text-white">operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((student, index) =>
                            <tr key={student.userId}>
                                <td>{student.userId}</td>
                                <td>{student.username}</td>
                                <td>{student.password}</td>
                                <td>
                                    <Link to={`/update/${student.userId}`}className="btn btn-primary m-2">Update</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(student.userId)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Select;
