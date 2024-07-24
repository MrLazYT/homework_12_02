import { useSelector } from "react-redux";
import BlogBlock from "./BlogBlock";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

export default function BlogList()
{
    const blogs = useSelector((state) => state);
    const navigate = useNavigate();

    const addBlogOnClick = () => {
        navigate('/add-blog');
    }

    return (
        <div>
            <Typography variant="h3">Blogs</Typography>
            
            <Container className="blogs-container">
                {blogs.map(blog => {
                    return (
                        <BlogBlock id={blog.id} title={blog.title} content={blog.content} author={blog.author} published_at={blog.published_at} topic={blog.topic}/>
                    )
                })}

                <Button variant="outlined" onClick={addBlogOnClick}>Add Blog</Button>
            </Container>
        </div>
    );
}