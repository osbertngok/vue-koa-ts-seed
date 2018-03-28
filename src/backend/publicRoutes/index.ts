import * as Router from 'koa-router';
export const rootRouter = new Router();
import {apiRouter} from './api';
import * as passport from 'koa-passport';
import {Context} from 'koa';

rootRouter.use('/api', apiRouter.routes());
rootRouter.post('/login', passport.authenticate('dumb'));
rootRouter.get('/logout', async (ctx: Context, next) => {
  await ctx.logout();
  ctx.redirect('/logout.html');
});
