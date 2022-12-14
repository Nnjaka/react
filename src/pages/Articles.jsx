import style from './Articles.module.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../store/articles/slice";
import { useCallback } from 'react';


export const Articles = () => {
    const loading = useSelector((state) => state.articles.loading);
    const error = useSelector((state) => state.articles.error);
    const articles = useSelector((state) => state.articles.articles);

    const fetchDispatch = useDispatch();

    const handleFetchData = useCallback(() => {
        fetchDispatch(fetchData());
      }, [fetchDispatch]);

    useEffect(() => {
        handleFetchData();
      }, [handleFetchData]);
    
      


    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');
    // const [articles, setArticles] = useState([]);

    // const getArticles = async () => {
    //     setLoading(true);
    //     setError('');
    //     setArticles([]);

    //     await new Promise((resolve) => setTimeout(resolve, 1000));

    //     try {
    //         const response = await fetch(`${api}/v3/articles`);
    //         const data = await response.json();
    //         setArticles(data);
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             setError(error.message);
    //         } else {
    //             setError('Error');
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    return (
    <>
        <div className={style.content}>
            <h2 className={style.title}>Articles</h2>
            {loading && <div>Loading....</div>}
            <Button onClick={() => handleFetchData()}>reload</Button>
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