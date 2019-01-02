import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { addSub } from '../../redux/actions/sub';

class SubAdd extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const { value } = this.state;

    if (!value) return;

    dispatch(addSub(value));
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Input
          type="text"
          placeholder="Add subreddit"
          value={value}
          onChange={e => this.setState({ value: e.target.value })}
        />{' '}
        <Button type="submit">Add</Button>
      </form>
    );
  }
}

SubAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SubAdd);
