export const filters = [
    {
        field: 'category',
        headerName: 'Category',
        type: "textField",
        inputType: "text"
    },
    {
        field: 'rating',
        headerName: 'Rating',
        type: "textField",
        inputType: "number"
    },
    {
        field: 'button',
        headerName: 'Apply',
        type: "button",
    },
]


export const ProductColumns = [
    {
        field: "image",
        headerName: "Image",
        width: 100,
        sortable: false,
        filterable: false,
        renderType: "image",
    },
    { field: 'title', headerName: 'Name', width: 320 },
    { field: 'price', headerName: 'Price', width: 130 },
    {
        field: 'category',
        headerName: 'Category',
        width: 130,
    },
    {
        field: 'rating',
        headerName: 'Rating',
        width: 130,
        renderType: "rating",
    },
    {
        field: "favorite",
        headerName: "Favorite",
        width: 100,
        sortable: false,
        filterable: false,
         renderType: "favorite",
    },
];