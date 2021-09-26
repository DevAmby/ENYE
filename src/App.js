import react, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/ui/header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect (() => {

    const fetchItems = async () => {
      const result = await axios (`https://api.enye.tech/v1/challenge/records?name=${query}`)

      // https://api.enye.tech/v1/challenge/records
      console.log (result.data.records.profiles)
      setItems(result.data.records.profiles)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])


   
  return (
    <div className="container">
        <Header />
        <Search  getQuery={(q) => setQuery(q)}/>
        <CharacterGrid isLoading={isLoading} items={items} />

    </div>
  );
}

export default App;
