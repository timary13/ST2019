import React from 'react';

class List extends React.PureComponent {
	render () {
		const { values } = this.props;
		return <ul>
			{values.map(
				(item, idx) => <li key={idx}>{item.title + ' ' + item.body}</li>,
			)}
		</ul>;
	}
}

export default List;
