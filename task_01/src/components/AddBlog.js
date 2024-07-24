import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACTION_TYPES } from "./store/boilerPlate";
import { Button, Container, FormLabel, TextField, TextareaAutosize, Typography } from "@mui/material";

export default function AddBlog()
{
    const [blog, setBlog] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        dispatch({
            type: ACTION_TYPES.ADD,
            payload: blog
        });

        navigate(`/`);
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
        <Container>
            <Typography variant="h5">Add Blog</Typography>

            <form onSubmit={onSubmitHandler}>
                <Container>
                    <FormLabel>Title:</FormLabel>
                    <TextField fullWidth value={blog.title} onChange={onTitleChangeHandler}/>
                </Container>

                <Container>
                    <FormLabel>Content:</FormLabel>
                    <TextareaAutosize fullWidth value={blog.content} onChange={onContentChangeHandler}/>
                </Container>

                <Container>
                    <FormLabel>Author:</FormLabel>
                    <TextField fullWidth value={blog.author} onChange={onAuthorChangeHandler}/>
                </Container>

                <Container>
                    <FormLabel>Published At:</FormLabel>
                    <TextField fullWidth type="date" value={blog.published_at} onChange={onPublishedAtChangeHandler}/>
                </Container>

                <Container>
                    <FormLabel>Topic:</FormLabel>
                    <TextField fullWidth value={blog.topic} onChange={onTopicChangeHandler}/>
                </Container>

                <Button variant="contained" type="submit">Save</Button>
            </form>
        </Container>
    );
}