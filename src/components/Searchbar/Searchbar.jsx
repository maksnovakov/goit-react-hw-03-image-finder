import { FiSearch } from 'react-icons/fi';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

export default class Searchbar extends Component {
  static defaultProps = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    searchRequest: '',
  };

  handleRequestChange = event => {
    this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchRequest.trim() === '') {
      return toast.warning('Search field is empty!');
    }
    this.props.onSearch(this.state.searchRequest);
    this.setState({ searchRequest: '' });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchForm_button}>
            <span className={style.SearchForm_button_label}>
            <FiSearch size={25} stroke="#3f51b5" />
            </span>
          </button>

          <input
            className={style.SearchForm_input}
            type="text"
            name="searchRequest"
            value={this.state.searchRequest}
            onChange={this.handleRequestChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}





            <span className={style.SearchForm_button_label}>
            </span>
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


