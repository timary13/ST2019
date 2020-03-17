import React from 'react';

class Item extends React.PureComponent {

    state = {
        isOpen: false
    };

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleClickDelete = (id) => {
        const {remove} = this.props;
        remove(id);
    };

    handleClickUpdate = (value) => {
        const {update} = this.props;
        update(value);
    };

    render() {
        const {value} = this.props;
        const buttons = <div>
            <button onClick={() => this.handleClickUpdate(value)}>Update</button>
            <button onClick={() => this.handleClickDelete(value._id)}>Delete</button>
        </div>;
        const menu = this.state.isOpen && buttons;
        return <div className="item" onClick={this.handleClick}>
            <p>{value.title + ' ' + value.body}</p>
            {menu}
        </div>;
    }
}

export default Item;
