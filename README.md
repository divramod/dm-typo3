# dm-typo3
typo 3 helper

## Description
* started project --> look at the [todos](todo.md) to see what will be done

## Run
```
dmt3 [task]
dm-typo3 [task]
```

## Install

```
npm install dm-typo3 -g # for global use
npm install dm-typo3 --save # for programmatically use
```

## Tasks

### [createProject](tasks/createProject/index.js)
* creates a typo3 project

#### createProject global usage
```
dmt3 [createProject]
```

#### createProject programmatically usage
```javascript
var createProject = require("dm-typo3").createProject;
var createProjectResult = createProject.start();
```

#### createProject steps

#### createProject features

#### createProject config
```javascript
{
    "createProject": {
    }
}
```

### [createProject](tasks/createProject/index.js)
* creates a typo3 project wrapped in a docker container

#### createProject global usage
```
dmt3 [createProject|cp]
```

#### createProject programmatically usage
```javascript
var createProject = require("dm-typo3").createProject;
var createProjectResult = createProject.start();
```

#### createProject steps

#### createProject features

#### createProject config
```javascript
{
    "createProject": {
    }
}
```

### [exampleAsync](tasks/exampleAsync/index.js)
* 

#### exampleAsync global usage
```
dmt3 [exampleAsync]
```

#### exampleAsync programmatically usage
```javascript
var exampleAsync = require("dm-typo3").exampleAsync;
var exampleAsyncResult = exampleAsync.start();
```

#### exampleAsync steps

#### exampleAsync features

#### exampleAsync config
```javascript
{
    "exampleAsync": {
    }
}
```

### [exampleSync](tasks/exampleSync/index.js)
* 

#### exampleSync global usage
```
dmt3 [exampleSync]
```

#### exampleSync programmatically usage
```javascript
var exampleSync = require("dm-typo3").exampleSync;
var exampleSyncResult = exampleSync.start();
```

#### exampleSync steps

#### exampleSync features

#### exampleSync config
```javascript
{
    "exampleSync": {
    }
}
```

## Config
* you can place a .dm-typo3.json file in your home directory (~/.dm-typo3.json)
* the following things are allowed at the moment
```javascript
{
}
```

## Lessons Learned
