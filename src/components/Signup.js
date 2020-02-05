import React from 'react';
import {useState, useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import AppContext from '../contexts/AppContext';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const languages = [
	'English',
	'Swahili',
	'Amharic',
	'Yoruba',
	'Oromo',
	'Arabic'
];
const countries = [
	'South Sudan',
	'Uganda',
	'Kenya',
	'Rwanda',
	'Burundi',
	'Tanzania'
];

// export const REGISTRATION_START = 'REGISTRATION_START';
// export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
// export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

//from my action file RIP

// console.log(addUser);
// 	dispatch({type: REGISTRATION_START});
// 	axiosWithAuth()
// 		.post(`/auth/register`, addUser)
// 		.then(res => {
// 			console.log(res);
// 			localStorage.setItem('token', res.data.token);
// 			dispatch({type: REGISTRATION_SUCCESS, payload: res.data});
// 			return true;
// 		})
// 		.catch(error => {
// 			console.log(error.response);
// 			dispatch({type: REGISTRATION_FAILURE, payload: error.response});
// 		});
// };

function Signup() {
	const {appState, dispatch} = useContext(AppContext);
	const [languageName, setLanguageName] = useState([]);
    const [countryName, setCountryName] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState('buyer');

    const handleUsernameChanges = event => {
        setUsername(event.target.value);
    };
    const handlePasswordChanges = event => {
        setPassword(event.target.value);
    };
    const handleDepartmentChange = event => {
        setDepartment(event.target.value);
    };
	const handleChange = event => {
		setLanguageName(event.target.value);
	};
	const handleChangeMultiple = event => {
		const {options} = event.target;
		const value = [];
		for (let i = 0, l = options.length; i < 1; i += 1) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}
		setLanguageName(value);
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'SIGNUP'})
        axiosWithAuth()
            .post('/auth/register', {
                username: username,
                password: password,
                department: department
            })
            .then(res => {
                console.log('Response', res)
            })
            .catch(error => {
                console.log(error);
            })
    }

	return (
		<Container>
			<FormControl onSubmit={event => handleSubmit(event)}>
                <TextField 
                    id="username" 
                    label="Username" 
                    value={username}
                    onChange={handleUsernameChanges}
                />
                <TextField 
                    id="password" 
                    label="Password"
                    value={password}
                    onChange={handlePasswordChanges}
                />
				<FormLabel component="legend">Account Type</FormLabel>
                <RadioGroup aria-label='department' name='department' value={department} onChange={handleDepartmentChange}>
                    <FormControlLabel value='buyer' control={<Radio />} label="Buyer" />
                    <FormControlLabel value='seller' control={<Radio />} label="Seller" />
                </RadioGroup>
                    {/* <InputLabel id="language">Language</InputLabel>
                    <Select
                        id="language"
                        multiple
                        value={languageName}
                        onChange={handleChange}
                        input={<Input/>}
                    >
                        {languages.map(language => (
                            <MenuItem key={language} value={language}>
                                <Checkbox checked={languageName.indexOf(language) > -1} />
                                <ListItemText primary={language} />                                
                            </MenuItem>
                        ))}                        
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="country">Country</InputLabel>
                    <Select
                        id="country"
                        multiple
                        value={countryName}
                        onChange={handleChange}
                        input={<Input/>}
                    >
                        {countries.map(country => (
                            <MenuItem key={country} value={country}>
                                <Checkbox checked={countryName.indexOf(country) > -1} />
                                <ListItemText primary={country} />                                
                            </MenuItem>
                        ))}
                        
                    </Select> */}
                <Button onClick={handleSubmit}>Submit</Button>
            </FormControl>
        </Container>
	);
}

export default Signup;