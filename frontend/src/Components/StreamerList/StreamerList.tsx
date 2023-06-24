import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, Grid} from '@mui/material';
import {Streamer} from '../../interface/interface';
import Pagination from "../Pagination/Pagination";
import StreamerCard from "../StreamerCard/StreamerCard";
import {downvoteStreamer, fetchStreamers, upvoteStreamer} from "../../service/apiService";

const StreamerList: React.FC = () => {
    const [streamers, setStreamers] = useState<Streamer[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    const loadStreamers = (page: number) => {
        fetchStreamers(page, 24)
            .then((response) => {
                setStreamers(response.data);
                setTotalPages(4); // Замініть 10 на правильну кількість сторінок, якщо відома.
            })
            .catch((error: string) => {
                console.error(error);
            });
    };

    useEffect(() => {
        loadStreamers(currentPage);
        navigate(`?page=${currentPage}`); // Змінюємо URL залежно від стану currentPage
    }, [currentPage, navigate]);

    const handleUpvote = (id: string) => {
        upvoteStreamer(id)
            .then((response) => {
                const updatedStreamers = streamers.map((streamer) => (streamer.id === id ? response.data : streamer));
                setStreamers(updatedStreamers);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleDownvote = (id: string) => {
        downvoteStreamer(id)
            .then((response) => {
                const updatedStreamers = streamers.map((streamer) => (streamer.id === id ? response.data : streamer));
                setStreamers(updatedStreamers);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {streamers.map((streamer) => (
                    <Grid item xs={12} sm={6} md={4} key={streamer.id}>
                        <StreamerCard streamer={streamer} handleUpvote={handleUpvote} handleDownvote={handleDownvote} />
                    </Grid>
                ))}
            </Grid>
            <Pagination currentPage={currentPage} totalPages={totalPages} handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
        </Container>
    );
};

export default StreamerList;
