import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from "@mui/material";
import { useState } from "react";
import { addUser } from '../services/api';

const Container = styled(FormGroup)`
       width : 50%;
       margin: 5% auto;
    `;

const FormControlNew = styled(FormControl)`
 margin-top :3%;
`;
const AddUser = () => {
    const defaultValue = {

        name: '',
        username: '',
        email: '',
        phone: '',
        city: '',
    }

    const [User, SetUser] = useState({ defaultValue });
    const onValueChange = (e) => {
        SetUser({ ...defaultValue, [e.target.name]: e.target.value });
    }
    console.log(User);
    const AddUserDetails = async () => {
        await addUser(User)

    }

    return (
        <Container>
            <Typography variant="h4">Add New User</Typography>
            <FormControlNew>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControlNew>
            <FormControlNew>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControlNew>
            <FormControlNew>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControlNew>
            <FormControlNew>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControlNew>
            <FormControlNew>
                <InputLabel>City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="city" />
            </FormControlNew>
            <FormControlNew>
                <Button variant="contained" onClick={AddUserDetails}>Add User</Button>
            </FormControlNew>
        </Container>
    )


}
export default AddUser;