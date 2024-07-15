import { createContext, useState, useEffect } from "react"

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [ Coin, setCoin ] = useState([])
    const [currency, setcurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllCoins = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Ls3drqDHXDdNYdFpUE1gtXCY'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setCoin(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoins();
    }, [currency])
    

    const contextValue = {
        Coin, currency, setcurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;