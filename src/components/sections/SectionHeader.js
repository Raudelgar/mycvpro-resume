import React from 'react';

import './sections.scss';

export default function SectionHeader({ header, theme }) {
	return <div className={`${theme}-section-header`}>{header}</div>;
}
