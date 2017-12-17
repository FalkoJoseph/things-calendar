import React, { Component } from 'react';
import Pikaday from 'pikaday';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Animate.scss';
import './Pikaday.scss';
import './Calendar.scss';

import starIcon from './icons/star.svg';
import moonIcon from './icons/moon.svg';

export default class ThingsCalendar extends Component {
	static propTypes = {
		show: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  static defaultProps = {
		show: false,
		onSelect: (date) => console.log(date)
  }

	constructor(props) {
		super(props);

		this.onSelect = this.onSelect.bind(this);
	}

	componentDidMount() {
		this.calendarPicker = new Pikaday({
			...this.props,
			onSelect: this.onSelect,
		});
		this.calendar.append(this.calendarPicker.el)
	}

	componentWillUnmount() {
		this.calendar.remove(this.calendarPicker.el);
	}

	onSelect(date) {
		var momentDate = moment(date);

		this.props.onSelect(momentDate)
	}

	render() {
		const { show } = this.props;

		return (
			<div className={`dash-calendar animated fadeIn ${show ? 'is-active' : ''}`}>
				<div className="dash-calendar-inner">
					<a className="dash-calendar-item" onMouseDown={() => this.onSelect(new Date())}>
						<img src={starIcon} alt="star" />
						Today
					</a>

					<a className="dash-calendar-item" onMouseDown={() => this.onSelect(moment().add(1, 'day'))}>
						<img src={moonIcon} alt="star" />
						Tomorrow
					</a>

					<div ref={(calendar) => { this.calendar = calendar; } } className="dash-calendar-container"></div>
				</div>
			</div>
		);
	}
}
