import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ACTION_TYPES } from "./store/boilerPlate"
import { Button, Container, FormLabel, TextField, TextareaAutosize, Typography } from "@mui/material";

export default function EditBlog()
{
    const { id } = useParams();
    const blogs = useSelector((state) => state);
    const dispatch = useDispatch();
    const [blog, setBlog] = useState(blogs.find(blog => blog.id === +id));
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        dispatch({
            type: ACTION_TYPES.EDIT,
            payload: blog
        });

        navigate(`/${id}`);
    }

    const onTitleChangeHandler = (e) => {
        setBlog({
            ...blog,
            title: e.target.value
        })
    }

    const onContentChangeHandler = (e) => {
        setBlog({
            ...blog,
            content: e.target.value
        })
    }

    const onAuthorChangeHandler = (e) => {
        setBlog({
            ...blog,
            author: e.target.value
        })
    }

    const onPublishedAtChangeHandler = (e) => {
        setBlog({
            ...blog,
            published_at: e.target.value
        })
    }

    const onTopicChangeHandler = (e) => {
        setBlog({
            ...blog,
            topic: e.target.value
        })
    }

    return (
        <Container className="container">
            <Typography variant="h5">Edit Blog</Typography>

            <form onSubmit={onSubmitHandler}>
                <Container>
                    <FormLabel>Title:</FormLabel>
                    <TextField fullWidth value={blog.title} onChange={onTitleChangeHandler}/>
                </Container>

                <Container className="input-container">
                    <FormLabel>Content:</FormLabel>
                    <TextareaAutosize fullWidth value={blog.content} onChange={onContentChangeHandler}/>
                </Container>

                <Container className="input-container">
                    <FormLabel>Author:</FormLabel>
                    <TextField fullWidth value={blog.author} onChange={onAuthorChangeHandler}/>
                </Container>

                <Container className="input-container">
                    <FormLabel>Published At:</FormLabel>
                    <TextField fullWidth type="date" value={blog.published_at} onChange={onPublishedAtChangeHandler}/>
                </Container>

                <Container className="input-container">
                    <FormLabel>Topic:</FormLabel>
                    <TextField fullWidth value={blog.topic} onChange={onTopicChangeHandler}/>
                </Container>

                <Button variant="contained" type="submit">Save</Button>
            </form>
        </Container>
    );
}