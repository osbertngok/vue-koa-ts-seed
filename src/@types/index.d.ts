declare module 'koa-convert' {

  import * as Koa from 'koa';

  /**
   * Convert middleware for Koa
   */
  function convert(middleware: Koa.Middleware): Koa.Middleware;

  namespace convert {}
  export = convert;
}

declare module 'koa-etag' {

  import * as Koa from 'koa';

  /**
   * Etag middleware for Koa
   */
  function etag(): Koa.Middleware;

  namespace etag {}
  export = etag;
}

interface TextEncoderStatic {
  new (encoding?: 'utf-8' | 'iso-8859-1' | 'cp-1252'): ITextEncoder;
}

interface ITextEncoder {
  encoding: string;
  encode(text: string): Uint8Array;
}

interface TextDecoderStatic {
  new (encoding?: 'utf-8' | 'iso-8859-1' | 'cp-1252'): ITextDecoder;
}

interface ITextDecoder {
  encoding: string;
  fatal: boolean;
  ignoreBOM: boolean;
  decode(buffer: Uint8Array, options ?: any): string;
}

// https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder
interface Window {
  TextEncoder: TextEncoderStatic;
  TextDecoder: TextDecoderStatic;
}
