// necessary to use css prop
import {CSSProp} from 'styled-components';

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}


export * from './themes';