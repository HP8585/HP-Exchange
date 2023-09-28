export const fetchMainData = ()=>{
const cryptos = ref()
const isLoading = ref(true)

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const loadData = async ()=>{
    try{
        
        const { data } = await useFetch(`https://api.coincap.io/v2/assets?limit=9`)
        
        if(data){
            cryptos.value = data.value?.data.map(asset => ({
                ...asset,
                changePercent24Hr: Number(asset.changePercent24Hr).toFixed(2),
                priceUsd: formatNumberWithCommas(Number(asset.priceUsd).toFixed(2))
            }))
            isLoading.value = false

        } else{
            setTimeout(() => {
                alert("Sorry but we've encountered a problem during fetching data from the server")
            }, 20000);
        }
       
    } catch(err){
        throw Error('sorry we have this err:', err)
    }  
}

return{
loadData,
cryptos,
isLoading
}
}