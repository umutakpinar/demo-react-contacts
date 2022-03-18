//Contacts index.js
import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

function Index() {

    const [contacts, setContacts] = useState([]); //bir state tanımladım ve array tipinde. Bu state benim contacs'lerimi tutacak. 
    /* Ancak bu contacts state'ine atama yapabilmek için, useState fonksiyonumu kullanmam gerekli. Bu nedenle bu fonksiyonu proplar yardımıyla Form component'ine göndereceğim.
    Ki bu sayede bu setContacs yardımı ile Form compoennti içerisinden contacts'e atamam yapabileyim. */

    /* Bu işlemi gerekleyebilmeka dına addContact adında bir prop oluşturup. Bu prop'a parametre olarak setContacts fucntion'ını göndereceğim. Yani Form componentı içerisinde
    addContact prop'u ile contacts'a kişi aktarımı yapabileceğim... Bunu addContact propunu da Form compoennti içerisindeki submit fonkisyonunda çağırmalıyım.*/
    
    return (
        <>
            <div className='container'>
                <List contacts={contacts}></List>
                <Form addContact={setContacts} contacts={contacts}></Form>
            </div>
        </>
    )
}

export default Index