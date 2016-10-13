# log-me
</br>
**log-me** is a simple logging tool you can use to log events to a log file within your project. You can think of this as a more powerful ` console.log() ` except you can turn this one off when you don't need logs to the terminal riddled all over the place.
</br>

### Important:
This package was writen in ` node v6.7.0 `

### Notes:
When reviewing this package documentation we're going to stage a couple basic outlines:

- We're going to just call the root directory of your app ` ROOT `

- If you didn't know what ` __filename ` is, it's a node variable that is set to the current file's path location. There, now you know.

- We're also going to assume that you already know what node environment variables are, if you don't here are a couple articles to get you up to speed:
  - [How to setup an environmental variables file] (https://medium.com/@rafaelvidaurre/managing-environment-variables-in-node-js-2cb45a55195f#.41s7ws32x)
  - [How to set environment variables in the terminal] (http://stackoverflow.com/questions/9198310/how-to-set-node-env-to-production-development-in-os-x)
___
## Install

To install as a dependency:
```bash

$ cd ROOT/
$ npm i --save log-me

```
</br>
To install as a dev dependency:
```bash

$ cd ROOT/
$ npm i --save-dev log-me

```
</br>
___
## Usage

At the top of a file you are going to use an instance of ` log-me ` set to a ` const `:
```javascript

const log = require('log-me');

```

When using your new tool, ` log `, there are a few parameters to play with:</br>
Parameter position:
  1. **` error ` | [required]**: Capture an error stack trace commonly represented as ` err ` in node.
  2. **` filePath ` | [optional]**: While this is an optional parameter you should always set this to ` __filename ` whenever you call a ` log-me ` instance or else it will default to ` log-me `'s module file path.
  3. **` customMessage ` | [optional]**: This is a string value that will be used as the log message header.
  4. **` customDescription ` | [optional]**: This is a string value. The description should be used if the purpose for the log is more complex then can be described in a few words using the ` customMessage ` parameter.
  5. **` reportLevel ` | [optional]**: This takes a numeric value of `0`, `1`, or `2`.
     - This is used against an array, ` ['Info', 'Warning', 'Error'] `.
     - By default this is set to index ` 0 ` but if an error is passed in at parameter 1 and the error has a stack trace then this will automatically be change to index ` 2 `.
     - Index ` 1 ` will only be used if entered as so.


```javascript
// extend the `log-me` module to this file
const log = require('log-me');

// parameters
log(err, filePath = __filename, customMessage = 'none', customDescription = 'none', reportLevel = 0);

// only log the stack trace
danceMonkeyDance(err, dance) {
  // ... some code
  if (err) {
    log(err, __filename);
  }
}


// if there's no error to pass in but you want to log an event just set the first parameter to `null`
log(null, __filename,
  'Header for custom log message',
  'A more descriptive explanation if you need one.');

// change the reportLevel to index of 'Warning'
log(null, __filename,
  'An unexpected event that could be a problem later',
  'A well deserved explanation as to what you suspect triggered this `Warning` log',
  1 // <-------- index of `Warning` status
);

```
