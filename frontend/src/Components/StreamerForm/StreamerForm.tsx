import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import { Container, FormGroup } from '@mui/material';

const StreamerForm = () => {
    const [name, setName] = useState('');
    const [platform, setPlatform] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        axios
            .post('http://localhost:5000/streamers', {
                name,
                platform,
                description,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        setName('');
        setPlatform('');
        setDescription('');
    };

    return (
        <Container>
            <FormGroup>
                <TextField
                    label="Streamer name"
                    variant="outlined"
                    type="text"
                    placeholder="Streamer name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginBottom: '16px' }}
                />
                <FormControl variant="outlined" sx={{ marginBottom: '16px' }}>
                    <InputLabel>Select platform</InputLabel>
                    <Select
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        label="Select platform"
                    >
                        <MenuItem value="">Select platform</MenuItem>
                        <MenuItem value="Twitch">Twitch</MenuItem>
                        <MenuItem value="YouTube">YouTube</MenuItem>
                        <MenuItem value="TikTok">TikTok</MenuItem>
                        <MenuItem value="Kick">Kick</MenuItem>
                        <MenuItem value="Rumble">Rumble</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: '16px' }}
                />
                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
            </FormGroup>
        </Container>
    );
};

export default StreamerForm;
