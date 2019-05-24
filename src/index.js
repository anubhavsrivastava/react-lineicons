import React from 'react';
import PropTypes from 'prop-types';
import '../line-icons/LineIcons.css';

const LineIcon = ({ name, size, effect, style, tag: Tag, ...rest }) => {
	return <Tag className={`lni-${name} size-${size} ${effect ? `lni-${effect}-effect` : ''}`} style={style} {...rest} />;
};

const tagPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func })]))]);

LineIcon.propTypes = {
	tag: tagPropType,
	name: PropTypes.string.isRequired,
	size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
	effect: PropTypes.oneOf(['spin', 'tada', 'flashing', 'burst', 'fade-left', 'fade-right', 'fade-up', 'fade-down']),
	style: PropTypes.object
};

LineIcon.defaultProps = {
	tag: 'i',
	size: 'md',
	style: {},
	effect: null
};

export default LineIcon;
