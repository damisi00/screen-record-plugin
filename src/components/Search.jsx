import SearchIcon from '../assets/search-normal.svg'
import '../App.css'

const Search = () => {
  return (
        <div className='search-wrapper'>
          <img src={SearchIcon} alt='search icon' />
          <input type='search' placeholder='Search for a particular video' />
          
        </div>
    )
}

export default Search 