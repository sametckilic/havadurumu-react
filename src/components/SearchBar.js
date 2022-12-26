import React, { Component } from 'react'


class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <form action="">
                    <input type="text" id="city-search" placeholder="Lütfen bir şehir adı giriniz..."></input>
                </form>
            </div>
        )
    }
}


export default SearchBar;