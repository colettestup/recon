let myScope = {}; // Example scope object

let dependencyParams = {
    type: 'scale',
    min: 0,
    max: 100
};

let dependencyName = 'scale1';

addScaleDependency(myScope, dependencyParams, dependencyName);

console.log(myScope.dependencies[dependencyName]);
// Output: { type: 'scale', min: 0, max: 100 }
