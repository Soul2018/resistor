import React, { Component } from 'react';

import Header from './components/Header/Header';
import Resistor from './components/Resistor/Resistor';
import BandA from './components/BandA/BandA';
import BandB from './components/BandB/BandB';
import BandC from './components/BandC/BandC';
import BandD from './components/BandD/BandD';
import ResultOhmValue from './components/ResultOhmValue/ResultOhmValue';

import leftSide from './images/parts/leftSide.gif';
import Black from './images/parts/Black.gif';
import spacer from './images/parts/spacer.gif';
import none from './images/parts/None.gif';
import right from './images/parts/rightSide.gif';

import options from './Utilities/OptionsAandB';
import optionsC from './Utilities/OptionsC';
import optionsD from './Utilities/OptionsD';
import CalculateFinalValue from './Utilities/CalculateFinalValue/CalculateFinalValue';

import './App.css';

class App extends Component {

    state = {
        initSetBand: [
            {
                src: leftSide,
                className: 'side',
                alt: 'first'
            },
            {
                src: Black,
                className: 'band',
                alt: 'bandA'
            },
            {
                src: Black,
                className: 'band',
                alt: 'bandB'
            },
            {
                src: Black,
                className: 'band',
                alt: 'bandC'
            },
            {
                src: spacer,
                className: 'band',
                alt: 'spacer'
            },
            {
                src: none,
                className: 'band',
                alt: 'bandD'
            },
            {
                src: right,
                className: 'side',
                alt: 'last'
            },

        ],

		selectedOptionA: '',
		selectedOptionB: '',
		selectedOptionC: '',
		selectedOptionD: '',
		placeholder: ["Band A Color", "Band B Color", "Band C Color", "BAnd D Color"],
		searchable: false,
		clearable: false,
		pageSize: 2,


    };

    bandAHandleChange = (event, bandA) => {

		const { initSetBand } = this.state;
    	this.setState({selectedOptionA: event});
		this.setState((prevState) => {
			initSetBand.forEach( (elem, ind) => {
				if (elem.alt === `${bandA}`) {
					initSetBand[ind].src = prevState.selectedOptionA.content;
				}
			});
		});

	}

	bandBHandleChange = (event, bandB) => {

		const { initSetBand } = this.state;
		this.setState({selectedOptionB: event});
		this.setState((prevState) => {
			initSetBand.forEach( (val,ind) => {
				if (val.alt === `${bandB}`) {
					initSetBand[ind].src = prevState.selectedOptionB.content;
				}
			});
		});

	}

	bandCHandleChange = (event, bandC) => {

		const { initSetBand } = this.state;
		this.setState({selectedOptionC: event});
		this.setState((prevState) => {
			initSetBand.forEach( (val,ind) => {
				if (val.alt === `${bandC}`) {
					initSetBand[ind].src = prevState.selectedOptionC.content;
				}
			});
		});

	}

	bandDHandleChange = (event, bandD) => {

		const { initSetBand } = this.state;
		this.setState({selectedOptionD: event});
		this.setState((prevState) => {
			initSetBand.forEach( (val,ind) => {
				if (val.alt === `${bandD}`) {
					initSetBand[ind].src = prevState.selectedOptionD.content;
				}
			});
		});

	}

	render() {

	const { selectedOptionA,selectedOptionB,selectedOptionC,selectedOptionD } = this.state;
	const valueA = selectedOptionA.value;
	const valueB = selectedOptionB.value;
	const valueC = selectedOptionC.value;
	const valueD = selectedOptionD.value;
	const valueABCD = [
		selectedOptionA.significant,
		selectedOptionB.significant,
		selectedOptionC.multiplier,
		selectedOptionD.tolerance
	] ;
debugger
	const resultValues = CalculateFinalValue((valueABCD));

	  return (
	  <div className="App">
		<Header />

		  { this.state.initSetBand.map((val, ind) => {
			return <Resistor source={val.src} cla={val.className} alt={val.alt} key={ind +1 } />
		  })}
		<div>
			<div className="my-select" id="band1">
				<BandA options={options} value={valueA}  pageSize={this.state.pageSize}
					   placeholder={this.state.placeholder[0]} searchable={this.state.searchable} clearable={this.state.clearable}
					   changed={(event, bandA) => this.bandAHandleChange(event,'bandA')}
				/>
			</div>
		  <div className="my-select" id="band2" >
			  <BandB options={options} value={valueB}  pageSize={this.state.pageSize}
					 placeholder={this.state.placeholder[1]} searchable={this.state.searchable} clearable={this.state.clearable}
					 changed={(event, bandB) => this.bandBHandleChange(event,'bandB')}
			  />
		  </div>

		  <div className="my-select" id="band3" >
			  <BandC options={optionsC} value={valueC}  pageSize={this.state.pageSize}
					 placeholder={this.state.placeholder[2]} searchable={this.state.searchable} clearable={this.state.clearable}
					 changed={(event, bandC) => this.bandCHandleChange(event,'bandC')}
			  />
		  </div>

		  <div className="my-select" id="band4" >
			  <BandD options={optionsD} value={valueD}  pageSize={this.state.pageSize}
					 placeholder={this.state.placeholder[3]} searchable={this.state.searchable} clearable={this.state.clearable}
					 changed={(event, bandD) => this.bandDHandleChange(event,'bandD')}
			  />
		  </div>
		</div>
		<div>
		  <ResultOhmValue value={resultValues.initialValue} min={resultValues.minValue} max={resultValues.maxValue}/>
		</div>
	  </div>
	);
	}
}

export default App;