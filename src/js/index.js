

function myFunction(obj) { 
    let newObj = {
        firstName: obj.fn, lastName: obj.ln
    };
    if (obj.size) {
        newObj.size = obj.size + "cm"
    }
    if (obj.weight) {
        newObj.weight = obj.weight + "kg"
    }
    return newObj
}
    myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
    // Expected {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
    myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
    // Expected {fn: 'Martin', ln: 'Harper', weight: '102kg'}
    console.log(myFunction({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 }))
    // Expected {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
    myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})    
    // Expected {fn: 'Matthew', ln: 'Müller'}
