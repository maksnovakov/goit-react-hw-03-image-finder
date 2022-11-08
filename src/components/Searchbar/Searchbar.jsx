import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import '../Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value });
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return alert('Please enter something :)');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span>
              <FiSearch size={25} stroke="#3f51b5" />
            </span>
          </button>

          <input
            className="SearchForm-input "
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

// export class Searchbar extends Component{
//     state = {
//         searchQuery: '',
//     };

//     handleChange = e => {
//         this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         if (this.state.searchQuery.trim() === '') {
//             return alert('Please enter something :)');
//         }
//         this.props.oonSubmit(this.state.searchQuery);
//         this.setState({ searchQuery: '' });
//     };

//     render() {
//         return (
//             <header className='Searchbar'>
//                 <form onSubmit={this.handleSubmit}className='SearchForm' >
//                     <button type='submit' className='SearchForm-button'>
//                         <span>
//                             <FiSearch size={25} stroke='#3f51b5' />
//                         </span>
//                     </button>
                    
//                     <input
//                         className='SearchForm-input'
//                         type="text"
//                         autoComplete='off'
//                         autoFocus
//                         placeholder='Search images and photos'
//                         name='searchQuery'
//                         value={this.state.searchQuery}
//                         onChange={this.handleChange} />
//                 </form>
//             </header>
//         );
//     }
// }

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func,
// };


