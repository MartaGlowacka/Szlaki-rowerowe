import React from 'react';


class SearchForm extends React.Component {

    state = {
        easy: this.props.easy,
        medium: this.props.medium,
        difficult: this.props.difficult,
        road: this.props.road,
        mtb: this.props.mtb,
        distanceMin: this.props.distanceMin,
        distanceMax: this.props.distanceMax


    }

    handleVoivodeshipChange = (e) => {
        console.log('wojewodztwo', e.target.value);
        if (typeof this.props.handleVoivodeshipChange === 'function') {
            this.props.handleVoivodeshipChange(e.target.value);
        }
    }

    handleMinChange = (e) => {
        console.log('min', e.target.value);
        if (typeof this.props.handleMinChange === 'function') {
            this.props.handleMinChange(e.target.value);
        }
    }

    handleMaxChange = (e) => {
        console.log('max', e.target.value);
        if (typeof this.props.handleMaxChange === 'function') {
            this.props.handleMaxChange(e.target.value);
        }
    }

    handleLevelSelectEasy = (e) => {
        this.setState({
            easy: !this.state.easy

        }, this.setLevel);


    }

    handleLevelSelectMedium = (e) => {
        this.setState({
            medium: !this.state.medium
        }, this.setLevel)


    }

    handleLevelSelectDifficult = (e) => {
        this.setState({
            difficult: !this.state.difficult
        }, this.setLevel)

    }

    setLevel = () => {
        const levelArray = [];
        if (this.state.easy) {
            levelArray.push('easy')
        }
        if (this.state.medium) {
            levelArray.push('medium')
        }
        if (this.state.difficult) {
            levelArray.push('difficult')
        }

        this.props.handleLevelSelect(levelArray);
    }

    handleBikeSelectMtb = (e) => {
        this.setState({
            mtb: !this.state.mtb
        }, this.setBikeType);
    }
    handleBikeSelectRoad = (e) => {
        this.setState({
            road: !this.state.road
        }, this.setBikeType);
    }

    setBikeType = () => {
        const bikeArray = [];
        if (this.state.mtb) {
            bikeArray.push('mtb')
        }
        if (this.state.road) {
            bikeArray.push('road')
        }

        this.props.handleBikeTypeSelect(bikeArray);
    }


    render() {

        return (
            <div className="search_form">
                Jestem SearchForm
                <form noValidate>
                    <div>Wybierz województwo:
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
                    </div>
                    <div>
                        <p>Poziom trudności:</p>
                        <label>
                            <input type="checkbox" value='easy' onChange={this.handleLevelSelectEasy}
                                   checked={this.state.easy}/> Łatwy
                        </label>
                        <label>
                            <input type="checkbox" value='medium' onChange={this.handleLevelSelectMedium}
                                   checked={this.state.medium}/>
                            Średni</label>
                        <label><input type="checkbox" value='difficult' onChange={this.handleLevelSelectDifficult}
                                      checked={this.state.difficult}/>Trudny</label>
                    </div>
                    <div>
                        Rower:
                        <label><input type="checkbox" value='mtb' onChange={this.handleBikeSelectMtb}
                                      checked={this.state.mtb}/>Rower górski</label>
                        <label><input type="checkbox" value='road' onChange={this.handleBikeSelectRoad}
                                      checked={this.state.road}/>Rower szsowy</label>
                    </div>
                    <div>
                        Długość trasy:
                        <label>Min:
                            <input type="number" value={this.state.distanceMin} onChange={this.handleMinChange}/>
                        </label>
                        <label>Max:
                            <input type="number" value={this.state.distanceMax} onChange={this.handleMaxChange}/>
                        </label>

                        handleMinChange
                    </div>

                </form>
            </div>
        )
    }
}


export default SearchForm;
