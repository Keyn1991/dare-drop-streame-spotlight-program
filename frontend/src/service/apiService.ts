import axiosService from "./axiosService";
import { StreamerData } from "../interface/interface";

export const fetchStreamers = async (page: number, limit: number) => {
    return await axiosService.get('/streamers', {
        params: {
            page: page,
            limit: limit,
        },
    });
};

export const upvoteStreamer = async (id: string) => {
    return await axiosService.put(`/streamers/${id}/upvote`);
};

export const downvoteStreamer = async (id: string) => {
    return await axiosService.put(`/streamers/${id}/downvote`);
};

export const createStreamer = async (streamerData: StreamerData) => {
    return await axiosService.post('/streamers', streamerData);
};
