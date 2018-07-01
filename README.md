# Udemy class on TDD using Jest.js

I'm using Jest.js to test my recent React.js app, and the coursework doesn't cover very much about that testing framework.  I'm hoping this course will give me more background on how to test my React app.


### Bonnie's additions

This is just a reminder to me of what changes to make after create-creact-app finishes up.


```
npm install ajv
npm install --save-dev jest jest-enzyme enzyme enzyme-adapter-react-16

```

I could make a simple script so I don't have to keep looking up these names:

```
#!/usr/bin/env bash

echo "installing ajv"
npm install ajv

# check exit status...
[[ $? != 0 ]] && echo "Couldn't install ajv" &&  exit 1 

echo "Installing jest, jest-enzyme, enzyme, enzyme-adapter for react 16..."

npm install --save-dev jest jest-enzyme enzyme enzyme-adapter-react-16

# again, check exit status...
[[ $? != 0 ]] && echo "Problem enzyme and jest modules..." && exit 1

echo "Success!"

exit 0
```


