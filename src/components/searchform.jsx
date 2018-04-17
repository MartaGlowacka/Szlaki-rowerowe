import React from 'react';



class SearchForm extends React.Component {

    handleVoivodeshipChange = (e) => {
        console.log('wojewodztwo', e.target.value);
        if(typeof this.props.handleVoivodeshipChange === 'function') {
            this.props.handleVoivodeshipChange(e.target.value);
        }
    }
    render() {
        return (
            <div className="search_form">
                Jestem SearchForm
                <form noValidate>
                    <label>Wybierz województwo:
                        <select onChange={this.handleVoivodeshipChange}>
                            <option value="calaPolska">Cała Polska</option>
                            <option value="dolnoslaskie">woj. Dolnośląskie</option>
                            <option value="kujawsko-pomorskie">woj. Kujawsko-Pomorskie</option>
                            <option value="lubelskie">woj. Lubelskie</option>
                            <option value="lubuskie">woj. Lubuskie</option>
                            <option value="lodzkie">woj. Łódzkie</option>
                            <option value="malopolskie">woj. Małopolski</option>
                            <option value="mazowieckie">woj. Mazowieckie</option>
                            <option value="opolskie">woj. Opolskie</option>
                            <option value="podkarpackie">woj. Podkarpackie</option>
                            <option value="podlaskie">woj. Podlaskie</option>
                            <option value="pomorskie">woj. Pomorskie</option>
                            <option value="slaskie">woj. Śląskie</option>
                            <option value="swietokrzyskie">woj. Świętokrzyskie</option>
                            <option value="warminsko-mazurskie">woj. Warmińsko-Mazurskie</option>
                            <option value="wielkopolskie">woj. Wielkopolskie</option>
                            <option value="zachodniopomorskie">woj. Zachodniopomorskie</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}



export default SearchForm;
