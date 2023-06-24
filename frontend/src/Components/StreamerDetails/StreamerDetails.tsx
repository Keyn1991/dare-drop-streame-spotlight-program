import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';

import {Streamer} from '../../interface/interface';
import {Container} from '@mui/material';
import Button from '@mui/material/Button';

const StreamerDetails = () => {
    const { id } = useParams();
    const [streamer, setStreamer] = useState<Streamer | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/streamers/${id}`)
            .then((response) => {
                setStreamer(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const handleBack = () => {
        navigate('/');
    };

    if (!streamer) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <img
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
                alt="Streamer Image"
            />
            <h3>{streamer.name}</h3>
            <p>{streamer.description}</p>
            <p>{streamer.platform}</p>
            <Button variant="contained" onClick={handleBack}>
                Back
            </Button>
        </Container>
    );
};

export default StreamerDetails;
