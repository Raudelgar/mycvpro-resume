import React from 'react';
import PropTypes from 'prop-types';
import './sections.scss';

export default function SectionHeader({ header, theme }) {
	return <div className={`${theme}-section-header`}>{header}</div>;
}

SectionHeader.propTypes = {
	header: PropTypes.string.isRequired,
	theme: PropTypes.string.isRequired,
};
