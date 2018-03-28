import * as KoaPassport from 'koa-passport';
import * as passport from 'passport';
import * as express from 'express';

class DumbStrategy implements passport.Strategy {

  public name: string;

  constructor() {
    this.name = 'dumb';
  }

  public authenticate(req: express.Request, options?: any): any {
    return undefined;
  }

}

KoaPassport.serializeUser((user, done) => {
  done(null, user);
});

KoaPassport.deserializeUser((user, done) => {
  done(null, user);
});

KoaPassport.use(new DumbStrategy());
