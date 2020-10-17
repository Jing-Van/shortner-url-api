// import express from 'express';
// import { testEnvironmentVariable } from '../settings';

// const indexRouter = express.Router();

// indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

// export default indexRouter;

import express from 'express';

import { indexPage} from '../controllers';
import {urlsPage} from '../controllers/urls';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
// add the get urls endpoint
indexRouter.get('/urls', urlsPage)

export default indexRouter;

