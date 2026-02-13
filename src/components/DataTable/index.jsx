import { DataGrid } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import "./styles.css";

function DataTable({ rows, columns, headerName, pageSize }) {
    return (
        <Box sx={{ width: "100%" }}>
            <div className="table-header">{headerName}</div>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[pageSize]}
                disableColumnMenu
                sortingOrder={["asc", "desc"]}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: pageSize, page: 0 },
                    },
                }}
                disableRowSelectionOnClick
            />
        </Box >
    )
}

export default DataTable;