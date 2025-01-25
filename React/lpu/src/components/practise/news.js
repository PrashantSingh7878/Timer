import React, {useEffect, useState } from 'react'
import Newsitems from './Newsitems';

export default function news() {
    const [article, setArticle] = useState([]);
    const [search, setSearch] = useState('');
    async function fetchNews(){
        ket data = await fetch('https://api.coinlore.net/api/tickers/')
        let news = await data.json()
        setArticle(news.article)
    }
    useEffect(()=>{
        fetchNews()
    },[search])
  return (
    <div>
      <input type ="text" name="search" id="search" value={search}
    </div>
  )
}

