import React, { useState } from 'react';
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Box,
    Alert,
} from '@mui/material';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        contact: '',
        about: '',
    });

    const [errors, setErrors] = useState({});
    const [displayData, setDisplayData] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation
        const newErrors = {};
        if (!formData.name.match(/^[a-zA-Z\s]+$/)) {
            newErrors.name = 'Name should contain alphabets only';
        }
        if (formData.contact.length !== 10 || !/^\d+$/.test(formData.contact)) {
            newErrors.contact = 'Contact should be 10 digits only';
        }
        if (
            !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
                formData.email
            )
        ) {
            newErrors.email = 'Invalid email format';
        }
        const dobDate = new Date(formData.dob);
        if (isNaN(dobDate) || dobDate > new Date()) {
            newErrors.dob = "DOB can't be in the future";
        }

        // If there are errors, update the state and return
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setDisplayData(false);
            return;
        }

        // If no errors, clear errors and display user data
        setErrors({});
        setDisplayData(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    fullWidth
                    required
                    error={!!errors.name}
                    helperText={errors.name}
                    margin="normal"
                />
                <TextField
                    label="Date of Birth"
                    type="date"
                    value={formData.dob}
                    onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                    }
                    fullWidth
                    required
                    error={!!errors.dob}
                    helperText={errors.dob}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    fullWidth
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                    margin="normal"
                />
                <TextField
                    label="Contact Number"
                    value={formData.contact}
                    onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                    }
                    fullWidth
                    required
                    error={!!errors.contact}
                    helperText={errors.contact}
                    margin="normal"
                />
                <TextField
                    label="Tell me about yourself"
                    multiline
                    rows={4}
                    value={formData.about}
                    onChange={(e) =>
                        setFormData({ ...formData, about: e.target.value })
                    }
                    fullWidth
                    margin="normal"
                />
                {Object.keys(errors).length > 0 && (
                    <Alert severity="error">
                        Please correct the errors before submitting.
                    </Alert>
                )}
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </form>
            {displayData && (
                <Card sx={{ marginTop: '1rem' }}>
                    <CardContent>
                        <Typography variant="h6">User Data</Typography>
                        <Box mt={2}>
                            <Typography>Name: {formData.name}</Typography>
                            <Typography>Date of Birth: {formData.dob}</Typography>
                            <Typography>Email: {formData.email}</Typography>
                            <Typography>
                                Contact Number: {formData.contact}
                            </Typography>
                            <Typography>About: {formData.about}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default UserForm;
