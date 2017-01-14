import singleNamedExports from './modules/singleDefaultExports/index';
import multipleNamedExports from './modules/multipleNamedExports/index';

import theLetKeyword from './newSyntax/let';
import constant from './newSyntax/const';
import template from './newSyntax/template-literal';
import spread from './newSyntax/spread';
import arrow from './newSyntax/arrow-functions';

import enhancedObj from './functionsAndObjects/enhancedObjectProperties';
import defaultParam from './functionsAndObjects/defaultParameter';

import promiseModule from './promises/promises';
import promiseAll from './promises/promisesAll';

import myclass from './classes/index';

import generator from './generators/generators';
import promisewithgenerator from './generators/promiseWithGenerators';

import maps from './mapsAndSets/maps';
import sets from './mapsAndSets/sets';
import spreadOnObject from './beyondES6/spreadOnObject';
import reactApp from './beyondES6/reactApplication';


function modules() {
    singleNamedExports();
    multipleNamedExports();
}

function newSyntax() {
    theLetKeyword();
    constant();
    template();
    spread();
    arrow()
}

function functionsAndObjects() {
    // enhancedObj();
    // defaultParam();
}

function callPromises() {
    // promiseModule();
    promiseAll();
}

function callClass() {
    myclass();
}

function callGenerator() {
    // generator();
    promisewithgenerator();
}

function mapsAndSets() {
    // maps()
    sets();
}

function beyondES6() {
    // spreadOnObject();
    reactApp();
}

// modules();
// newSyntax();
// functionsAndObjects();
// callPromises();
// callClass();
// callGenerator();
// mapsAndSets();
beyondES6();