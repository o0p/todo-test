let addItem = prompt('Please select action:');
const itemList = [];

while (addItem !== 'q'){
    switch (addItem) {
        case addItem = 'n':
            addItem = prompt('What would you like to do?')
            itemList.push(addItem);
            console.log(`"${addItem}" has been added to the list.`);
            break;
        case addItem = 'l':
            console.log('************************');
            itemList.forEach(function(item, i) {
                console.log(`${i}: ${item}`);
            })
            console.log('************************');
            break;
        case addItem = 'd':
            let selectItem = parseInt(prompt('Please select index of the item you would like to delete:'))
            console.log(`Item "${itemList[selectItem]}" has been successfully deleted!`);
            itemList.splice(selectItem,1);
            break;
        case addItem = 'q':
            addItem = 'q';
        }
addItem = prompt('Please select action:');
}
console.log('Quitting')