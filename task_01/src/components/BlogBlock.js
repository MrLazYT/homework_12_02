import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import { CardContent, Container, Typography } from "@mui/material";

export default function BlogBlock({ id, title, content, author, published_at, topic })
{
    const navigate = useNavigate();

    const blockOnClick = () => {
        navigate(`/${id}`);
    }

    return (
        <Card onClick={blockOnClick}>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="p">{content.substring(0, 97)}...</Typography>

                <Container className="publishing-info">
                    <Typography variant="p">{author}</Typography>
                    <Typography variant="p">{published_at}</Typography>
                </Container>

                <Typography variant="p" className="blog-topic">{topic}</Typography>
            </CardContent>
        </Card>
    );
}