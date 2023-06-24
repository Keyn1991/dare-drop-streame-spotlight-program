import {StreamerCardProps} from "../../interface/interface";
import {useState} from "react";
import {Badge, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';

const StreamerCard: React.FC<StreamerCardProps> = ({ streamer, handleUpvote, handleDownvote }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Card
            style={{
                transition: 'transform 0.3s',
                transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                    <Link to={`/streamer/${streamer.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
                            alt="Streamer Image"
                        />
                        {streamer.name}
                    </Link>
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Platform: {streamer.platform}
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    Description: {streamer.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Badge badgeContent={streamer.upvotes} color="warning">
                    <Button variant="contained" size="small" color="primary" onClick={() => handleUpvote(streamer.id)}>
                        Upvote
                    </Button>
                </Badge>
                <Badge badgeContent={streamer.downvotes} color="error">
                    <Button variant="contained" size="small" color="secondary" onClick={() => handleDownvote(streamer.id)}>
                        Downvote
                    </Button>
                </Badge>
            </CardActions>
        </Card>
    );
};

export default StreamerCard;