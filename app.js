let addItem = prompt('Please select action:');
const itemList = [];


while (addItem !== 'q'){
    switch (addItem) {
        case addItem = 'n':
            addItem = prompt('What would you like to do?')
            itemList.push(addItem);
            console.log(itemList);
            break;
        case addItem = 'l':
            console.log('************************');
            itemList.forEach(function(item, i) {
                console.log(`${i}: ${item}`);
            })
            console.log('************************');
            break;
        case addItem = 'd':
            console.log(addItem);
            break;
        case addItem = 'q':
            addItem = 'q';
            break;
        }
addItem = prompt('Please select action:');
    }
console.log('Quitting')