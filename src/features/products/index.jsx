import { useEffect, useState, useCallback, useMemo } from "react";
import api from "../../lib/axios";
import DataTable from "../../components/DataTable";
import { Rating, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";
import InputField from "../../components/TextField";
import "./styles.css";
import CustomButton from "../../components/CustomButton";
import { getFavorites, setFavorites } from "../../utils";
import { filters, ProductColumns } from "../../Constants";

function Products() {

    const [products, setProducts] = useState({});
    const [selectedValues, sertSelectedValues] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const toggleFavorite = (id) => {
        setProducts((prev) => {
            const updatedProducts = prev.products.map((product) =>
                product.id === id
                    ? { ...product, isFavorite: !product.isFavorite }
                    : product
            );

            const favoriteIds = updatedProducts.filter((p) => p.isFavorite).map((p) => p.id);
            setFavorites(favoriteIds);
            return {
                ...prev,
                products: updatedProducts,
            };
        });
    };

    const renderers = useMemo(() => ({
        image: (params) => (
            <img
                src={params.row.thumbnail}
                alt={params.row.title}
                loading="lazy"
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
            />
        ),

        rating: (params) => (
            <Rating
                value={Number(params.row.rating)}
                readOnly
                size="small"
            />
        ),

        favorite: (params) => (
            <IconButton
                size="small"
                aria-label="add to favorites"
                onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(params.row.id);
                }}
            >
                {params.row.isFavorite ? (
                    <FavoriteIcon color="error" fontSize="small" />
                ) : (
                    <FavoriteBorderIcon fontSize="small" />
                )}
            </IconButton>
        ),
    }), [toggleFavorite]);

    const columns = useMemo(() => (
        ProductColumns?.map((col) => ({
            ...col,
            renderCell: col.renderType
                ? renderers[col.renderType]
                : undefined,
        }))
    ), [renderers]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const favorite = getFavorites();
        await api.get('/products').then((res) => {
            const data = res.data.products.map((p) => ({
                ...p,
                isFavorite: favorite.includes(p.id),
            }));
            setProducts(data);
            setFilteredProducts(data);
        }).catch((err) => {

        })
    };

    const handleChange = (type, field, e) => {
        sertSelectedValues(prev => {
            const newFilterData = { ...prev };
            switch (type) {
                case 'textField':
                    newFilterData[field] = e.target.value;
                    break;
                default:
                    break;
            }
            return newFilterData;
        });
    }

    const handleApply = () => {
        const filteredData = products?.filter((product) =>
            Object.keys(selectedValues).every((key) => {
                const value = selectedValues[key];
                if (value === "" || value === null || value === undefined) {
                    return true;
                }
                if (key === "rating") {
                    return Number(product.rating) === Number(value);
                }
                return product[key] === value;
            })
        );
        setFilteredProducts(filteredData);
    };

    return (
        <div>
            <div className="products-header">
                <h2 className="products-title">Product List</h2>
            </div>
            <div className="filters-wrapper">
                {filters?.map((val, index) =>
                    val.type === "textField" ? (
                        <InputField
                            key={index}
                            label={val?.headerName}
                            handleChange={(e) => handleChange(val?.type, val?.field, e)}
                            type={val?.inputType}
                        />
                    ) : val.type === "button" ? (
                        <CustomButton
                            key={index}
                            label={val?.headerName}
                            handleClick={handleApply}
                        />
                    ) : null
                )}
            </div>
            <DataTable
                rows={filteredProducts}
                columns={columns}
                // headerName={"Product List"}
                pageSize={25}
            />
        </div>
    )
}

export default Products