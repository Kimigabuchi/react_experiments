import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Article from './Article';
import {articles} from './fixtures';

const article = articles[0];

render(<Article article={article} />, document.getElementById('root'));