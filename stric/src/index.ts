import { Router as Stric, macro } from '@stricjs/router'; 

// This is a "Hi" app made with Stric
// If you have any issues when upgrading to newest Stric version
// please file an issue at https://github.com/bunsvr/router
export default new Stric().get('/', macro('Hi'));

// Macros can be used for static response 
// because code in macros can be inserted directly into fetch
