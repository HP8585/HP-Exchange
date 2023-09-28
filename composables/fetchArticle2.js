export function loadArticles2(){
    const articles = ref('')


async function loadNews(){
    const { data } = await useFetch(`https://gnews.io/api/v4/top-headlines?token=c22ce7fdc97e44c2404ac3fa59f87bff&topic=bitcoin&lang=en&max=5`)
    
    articles.value = data?.value?.articles
    console.log(data?.value);
    console.log(articles.value);
}

    return {
        articles,
       
        loadNews
      }

}