import React, { Component } from 'react';
import '../style/App.css'

class CardSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			searchResult: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleChange(event) {
		this.setState({searchText: event.target.value});
	}

	handleSearch(event) {
		//alert('search submitted with: ' + this.state.searchText);
		fetch('https://api.scryfall.com/cards/search?q=' + this.state.searchText)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						searchResult: result.data
					});
				},
				(error) => {
					alert('error occured');
				}
			)
	}

	render() {
		const searchResult = this.state.searchResult.map(card => {
			return (
				<img key={card.id} src={card.image_uris.small} />
			);
		});

		return (
			<div class="component-box">
				<div>
					<input type="text" value={this.state.searchText} onChange={this.handleChange} />
					<button onClick={this.handleSearch}>Submit</button>
				</div>
				<div>
					{searchResult}
				</div>
			</div>
		);
	}
}

export default CardSearch;