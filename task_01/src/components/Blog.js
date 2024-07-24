import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { ACTION_TYPES } from "./store/boilerPlate";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";

export default function Blog()
{
    const { id } = useParams();
    const blogs = useSelector((state) => state);
    const dispatch = useDispatch();
    const blog = blogs.find(blog => blog.id === +id);
    const navigate = useNavigate();

    const editOnClick = () => {
        navigate(`/${id}/edit`);
    }

    const deleteOnClick = () => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: +id
        });

        navigate('/');
    }

    return (
        <Container sx={{ width:"60%" }}>
            <Typography variant="h4">{blog.title}</Typography>

            <ButtonGroup className="button-container">
                <Button onClick={editOnClick}>Edit blog</Button>
                <Button onClick={deleteOnClick}>Delete blog</Button>
            </ButtonGroup>
            
            <Container className="publishing-info">
                <Typography variant="p">Published by: {blog.author}</Typography>
                <Typography variant="p">Published at: {blog.published_at}</Typography>
            </Container>

            <Typography variant="p" className="blog-content">{blog.content}</Typography>
            <Typography variant="p" className="blog-topic">{blog.topic}</Typography>
        </Container>
    )
}