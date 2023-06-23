import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container} from "@mui/material";
import Button from "@mui/material/Button";

interface Streamer {
    id: number;
    name: string;
    platform: string;
    description: string;
    upvotes: number;
    downvotes: number;
}

const StreamerList: React.FC = () => {
    const [streamers, setStreamers] = useState<Streamer[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/streamers')
            .then((response) => {
                setStreamers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleUpvote = (id: number) => {
        axios
            .put(`http://localhost:5000/streamers/${id}/upvote`)
            .then((response) => {
                const updatedStreamers = streamers.map((streamer) =>
                    streamer.id === id ? response.data : streamer
                );
                setStreamers(updatedStreamers);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDownvote = (id: number) => {
        axios
            .put(`http://localhost:5000/streamers/${id}/downvote`)
            .then((response) => {
                const updatedStreamers = streamers.map((streamer) =>
                    streamer.id === id ? response.data : streamer
                );
                setStreamers(updatedStreamers);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Container>
            {streamers.map((streamer) => (
                <li key={streamer.id}>
                    <h3>{streamer.name}</h3>
                    <p>{streamer.platform}</p>
                    <p>{streamer.description}</p>
                    <Button variant="contained" onClick={() => handleUpvote(streamer.id)}>Upvote</Button>

                    <span>Upvotes: {streamer.upvotes}</span>
                    <Button variant="contained" onClick={() => handleDownvote(streamer.id)}>Downvote</Button>
                    <span>Downvotes: {streamer.downvotes}</span>
                </li>
            ))}
        </Container>
    );
};

export default StreamerList;
