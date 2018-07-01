#!/usr/bin/env bash

echo "installing ajv"
npm install ajv

[[ $? != 0 ]] && echo "Couldn't install ajv" &&  exit 1 

echo "Installing jest, jest-enzyme, enzyme, enzyme-adapter for react 16..."

npm install --save-dev jest jest-enzyme enzyme enzyme-adapter-react-16

[[ $? != 0 ]] && echo "Problem enzyme and jest modules..." && exit 1

echo "Success!"

exit 0
