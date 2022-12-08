import { useState } from "react";
import { api } from "../constants";
import style from './Articles.module.css';
import Button from '@mui/material/Button';


export const Articles = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        setLoading(true);
        setError('');
        setArticles([]);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        try {
            const response = await fetch(`${api}/v3/articles`);
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Error');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
    <>
        <div className={style.content}>
            <h2 className={style.title}>Articles</h2>
            {loading && <div>Loading....</div>}
            <Button onClick={getArticles}>reload</Button>
            <ul>
                {articles.map((acticle) => (
                    <li key={acticle.id}>{acticle.title}</li>
                ))}
            </ul>

            {error && <div>{error}</div>}
        </div>
    </>
    )
}