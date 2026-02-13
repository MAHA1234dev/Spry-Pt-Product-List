import { TextField } from '@mui/material';

function InputField({ handleChange, value, label, type }) {
    return (
        <TextField
            sx={{
                "& .MuiInputBase-input": {
                    padding: "10px",
                },
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                        borderColor: "#999",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#ccc",
                    },
                },
            }}
            id="outlined-basic"
            label={label}
            variant="outlined"
            onChange={handleChange}
            value={value}
            size="small"
            type={type}
        />
    )
}

export default InputField