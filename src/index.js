import React from 'react';
import {render} from 'react-dom';
import './index.css';
import ArticleList from './components/ArticleList';
import {articles} from './fixtures';

render(<ArticleList articles={articles} />, document.getElementById('root'));