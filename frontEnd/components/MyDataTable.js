import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';

const MyDataTable = ({items}) => {
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);
    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Action</DataTable.Title>
                <DataTable.Title >User_id</DataTable.Title>
                <DataTable.Title >createdAt</DataTable.Title>
                <DataTable.Title >Nom</DataTable.Title>
                <DataTable.Title >iccid</DataTable.Title>
            </DataTable.Header>

            {items.slice(from, to).map((item, key) => (
                <DataTable.Row key={key} >
                    <DataTable.Cell><Text style={{ fontSize: 7 }} className="font-bold" >{item.action.split(" ")[1]}</Text> </DataTable.Cell>
                    <DataTable.Cell  > <Text style={{ fontSize: 7 }} className="font-bold" >{item.UserId}</Text> </DataTable.Cell>
                    <DataTable.Cell> <Text style={{ fontSize: 7 }} className="font-bold" >{item.createdAt.toString().split('T')[0]}</Text> </DataTable.Cell>
                    <DataTable.Cell> <Text style={{ fontSize: 7 }} className="font-bold" >{item.userName}</Text> </DataTable.Cell>
                    <DataTable.Cell> <Text style={{ fontSize: 7 }} className="font-bold" >{item.iccid}</Text> </DataTable.Cell>
                </DataTable.Row>
            ))}

            <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${items.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Rows per page'}
            />
        </DataTable>
    )
}

export default MyDataTable