import axios from 'axios'
import { useLastChanged } from '@vueuse/core'

export const comparisonn = ()=>{

           let origin = ref('bitcoin')
           let demanded = ref('eth')
            let many = ref(1)
            let calculated = ref('')


   const comparison= async ()=>{
        if(demanded.value != '' && origin.value != ''){
            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${origin.value}&vs_currencies=${demanded.value}`)
        .then((res)=>{
            if(many.value){
            calculated.value = many.value * res.data[origin.value][demanded.value].toFixed(3)
        }
            console.log(res);
        })
        .catch(e=>{
            alert("Sorry, We could not fetch data from the server, try again later !")
        })
       
        } else return;
       
    }

    const switchValues = ()=>{

        const temp = demanded.value;
        demanded.value = origin.value;
        origin.value = temp;
  
    }

    //this is for today's date
    const nuxtApp = useNuxtApp()
    const today = nuxtApp.todaysDate

    const changee = ref();
    
    const orders = ref([])
    const isThere = ref(true)
    const isSuccessful = ref(false)
    const width = ref(100)
    const createdAt = ref(null)
    const orderRegister = async (currency1, currency2, amount1, amount2)=>{

            const { data } = await useFetch(`https://api.coincap.io/v2/assets/${origin.value}`)
            if(data){
                changee.value = Number(data.value?.data.changePercent24Hr).toFixed(2);
                createdAt.value = useLastChanged(data.value.data)
                
                orders.value.unshift({
                    currency1: currency1,
                    currency2: currency2,
                    amount1: amount1,
                    amount2: amount2,
                    at: changee.value,
                    createdAt: today
                })
                sessionStorage.setItem('orders',JSON.stringify(orders.value))

                
              
                isThere.value = false
                isSuccessful.value = true
                setTimeout(() => {
                    isSuccessful.value = false
                }, 2000);
              
            } else{
                alert("We are very sorry, but we could not accomplish this operation, please refresh the page and if the problem still persists try again later!")
            }
        
    
        
    }


    function retrieveStorage(){
            const storedItem = JSON.parse(sessionStorage.getItem('orders'))
            if(storedItem){
                orders.value = storedItem
                isThere.value = false
            }
           
          
    }
    //for changeOver24Hr
    
    const retrieveChange = async ()=>{
        axios.get(`https://api.coincap.io/v2/assets/${demanded.value}`)
        .then(res=>{
            changee.value = res.data.changePercent24Hr
            console.log(res.data.changePercent24Hr);
        })
    }

    
    return{
        comparison,
        origin,
        demanded,
        many,
        calculated,
        switchValues,
        orders,
        orderRegister,
        createdAt,
        changee,
        isThere,
        isSuccessful,
        retrieveStorage
    }
}