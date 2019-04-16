import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SubAdd = ({ dispatch }) => {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!value) {
      return;
    }

    dispatch({ type: 'SUB_ADD', sub: value });
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Add subreddit" value={value} onChange={e => setValue(e.target.value)} />{' '}
      <Button type="submit">Add</Button>
    </form>
  );
};

SubAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SubAdd);
