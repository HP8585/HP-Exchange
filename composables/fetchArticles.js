
export function loadArticles(){
    const articles = ref('')
    
  
    const now = new Date()
const day = now.getDate()
const month = now.getMonth()
const year = now.getFullYear()


async function loadNews(){
    const { data } = await useFetch(`https://newsapi.org/v2/everything?q=crypto&from=${year}-${month}-${day}&sortBy=publishedAt&pageSize=4&page=1`, {
        headers:{
            Authorization: `Bearer a88a474b5dc144d68f5ecd3d49112659`
        }
    })
    
    articles.value = data?.value?.articles
}
    return {
        articles,
       
        loadNews
      }

}