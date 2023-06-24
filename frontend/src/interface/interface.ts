export interface Streamer {
    id: string;
    name: string;
    platform: string;
    description: string;
    upvotes: number;
    downvotes: number;
}
export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePrevPage: () => void;
    handleNextPage: () => void;
}

export interface StreamerCardProps {
    streamer: Streamer;
    handleUpvote: (id: string) => void;
    handleDownvote: (id: string) => void;
}

export interface StreamerData  {
    name: string;
    platform: string;
    description: string;
};