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
        name: 'Name',
        selector: 'name',
        sortable: false,
    },
    {
        name: 'Address',
        selector: 'address',
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
        cell: row => <NavLink to={row.id} rel="noopener noreferrer">View</NavLink>,
    },
];

const Organisationview = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(15);

    const fetchUsers = async page => {
        setLoading(true);

        const response = await services.ViewOrgPagination(page, perPage)
        setData(response.data.data);
        setTotalRows(parseInt( response.data.count ));
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        const response = await services.ViewOrgPagination(page, newPerPage)

        setData(response.data.data);
        setPerPage(newPerPage);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers(1);
    }, []);

    return (
        <DataTable
            title="Analyst"
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
export default Organisationview