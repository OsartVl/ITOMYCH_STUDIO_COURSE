

function myFunction (obj) { 
    let personalInfo = {
        firstName: obj.fn,
        lastName: obj.ln,
        size: obj.size,
        weight: obj.weight,
    }

    if (personalInfo.firstName != undefined) {
        personalInfo.size = obj.size + "cm";
    }
    if (obj.size == undefined) {
        delete personalInfo.size;
    } else {
        personalInfo.size = obj.size + "cm";
    }
    if (obj.weight == undefined) {
        delete personalInfo.weight
        
    } else {
        personalInfo.weight = obj.weight + "kg";
    }

    return personalInfo
}
    
    console.log(myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}))
    
    // Expected {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
    
    console.log(myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}))
    
    // Expected {fn: 'Martin', ln: 'Harper', weight: '102kg'}
    
    console.log(myFunction({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 }))
    
    // Expected {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
    
    console.log(myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}))    
    
    // Expected {fn: 'Matthew', ln: 'Müller'}
