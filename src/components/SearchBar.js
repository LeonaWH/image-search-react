import './SearchBar.css';
import { useState} from 'react';

function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
        
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label className="title-label">Search for Images</label>
                <input placeholder = "Enter text to search" value={term} onChange={handleChange}/>
                <label className="search-prompt">Search results for {term}</label>
            </form>
        </div>
    );
    
   
}

export default SearchBar; 

