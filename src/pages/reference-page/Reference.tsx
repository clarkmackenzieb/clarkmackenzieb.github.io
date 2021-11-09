import React from 'react';
import referenceList from './reference-posts/index';
import ListPage from '../../components/list-page/ListPage';

export default function References(){
  return (
    <ListPage
      title="References"
      body="As much as I'd like to say that I never forget things, I find myself googling things I only use once every several months. So I decided to make a reference page here for things I've written and would like to reuse. These will span from code snippets, to file organization, to development lifecycle."
      postList={referenceList}
      link="reference"
    />
  );
}
