import axios from 'axios';
import React, { useState, useEffect } from 'react';

function LocalForm() {
    const [formData, setFormData] = useState({ name: "", email: "", address: "", phoneNumber: "" });
    const [users, setUsers] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", formData);
            setFormData({ name: "", email: "", address: "", phoneNumber: "" });
            fetchUsers(); 
        } catch (err) {
            console.log("Something Went Wrong", err);
        }
    }


    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:5000/users");
            setUsers(res.data);
        } catch (err) {
            console.log("Something Went Wrong", err);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <h2>Form Submission With Local API</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                />
                <button type="submit">Submit</button>
            </form>

            <h3>Users List</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email} - {user.address} - {user.phoneNumber}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default LocalForm;