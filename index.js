const yargs = require('yargs').argv;
const contactsOperations = require('./contacts');


const invokeAction = async({ action, id, name, email, phone }) => {
    switch(action) {
        case "list":
            const contactList = await contactsOperations.listContacts();
                console.table(contactList);
        break;
    
        case ("get"):
            const contact = await contactsOperations.getContactById(id);
            if (!contact) {
                    throw new Error(`Contact with ${id} doesn't exist`)
                }
                console.log(contact);
            break;
        
        case ("add"):
            const newContact = await contactsOperations.addContact(name, email, phone);
            console.log(newContact);
            break;

        case ("remove"):
            const removedContact = await contactsOperations.removeContact(id);
            if (!removedContact) {
                    throw new Error(`Contact with ${id} doesn't exist`)
                }
            console.log(removedContact);
            break;
        
        default: 
            console.warn("\x1B[31m Unknown action type!");
        
    }
}

invokeAction(yargs);
