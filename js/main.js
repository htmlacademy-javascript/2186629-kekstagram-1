//-----main.js — точка входа. Модуль, который связывает другие модули;

import './data.js';
import './util.js';


import { DESCRIPTION, NAMES, MESSAGE } from './data.js';
import { generatePhotos } from './util.js';

generatePhotos(10);
