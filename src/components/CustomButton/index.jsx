import { Button } from "@mui/material";

function CustomButton({ label, handleClick }) {
    return (
        <Button variant="contained" color="secondary" onClick={handleClick}>{label}</Button>
    )
}

export default CustomButton;