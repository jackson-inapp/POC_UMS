import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import services from '../../services/api';
import { NavLink } from 'react-router-dom';

const columns = [
    {
        name: 'id',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'username',
        selector: 'username',
        sortable: true,
    },
    {
        name: 'First Name',
        selector: 'fname',
        sortable: false,
    },
    {
        name: 'Middle Name',
        selector: 'mname',
        sortable: false,
    },
    {
        name: 'Last Name',
        selector: 'lname',
        sortable: false,
    },
    {
        name: 'Department',
        selector: 'department',
        sortable: false,
    },
    {
        name: 'Phone',
        selector: 'phone',
        sortable: false,
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: false,
    },
    {
        name: 'Action',
        button: true,
        cell: row => <NavLink to={'view-analyst/'+row.id} rel="noopener noreferrer">View</NavLink>,
    },
];

const ViewAnalyst = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const fetchUsers = async page => {
        setLoading(true);

        const response = await services.viewanalystPaginaion('analyst', page, perPage)
        setData(response.data.data);
        setTotalRows(parseInt( response.data.count ));
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        const response = await services.viewanalystPaginaion('analyst', page, newPerPage)

        setData(response.data.data);
        setPerPage(newPerPage);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers(1);
        // eslint-disable-next-line
    }, []);

    return (
        <DataTable
            title="All Analyst"
            columns={columns}
            data={data}
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
        />
    );
};
export default ViewAnalyst