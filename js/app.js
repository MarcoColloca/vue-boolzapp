console.log('JS Test');


const { createApp } = Vue


createApp({

    data() {
        return {
            contacts: [
                // dati 1° utente
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },

                // dati 2° utente
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

                // dati 3° utente
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },

                // dati 4° utente
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },

                // dati 5° utente
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },

                // dati 6° utente
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },

                // dati 7° utente
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },

                // dati 8° utente
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            currentObjectIndex: 0,            
            currentMessageIndex: 0,

            lastAccess: 12,

            messageText: '',

            searchBarText: '',

        }
    },


    computed:{
        // computed che rappresenta il contatto all'indice corrente
        currentContact(){
            return this.contacts[this.currentObjectIndex]
        },

        // computed che rappresenta l'array messages del contatto all'indice corrente
        currentChat(){
            return this.currentContact.messages
        },

        // computed che tenendo in considerazione le variabili this.contacts e this.searchBarText, 
        // ritorna un array secondario con all'interno solo oggetti che abbiano la loro proprietà nome che contenga le lettere inserite all'interno della serachBar.
        contactsFilter() {
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchBarText.toLowerCase()));
        },
    },


    methods:{

        // funzione che permette cambia un parametro di contacts al cambiare dell'index, ha il compito di legare i contatti della sidebar ai vari elementi nella pagina
        activeElement(index){

            this.currentObjectIndex = index;

        },

        // funzione che permette di creare un messaggio, ottenendo una risposta fissa, quando si scrive nella chatBox e si preme invio
        newMessage(){

            const contacts = this.contacts;
            const currentObjectIndex = this.currentObjectIndex;
            const messageText = this.messageText;

            // condizione per l'invio del messaggio
            if(messageText !== ''){


                // creazione di un oggetto che corrisponde ad un messaggio inviato
                const newSentMessage = {
                    date: this.myDate(),
                    message: this.messageText,
                    status: 'sent'
                };
                // inserimento del messaggio inviato nell'array messages
                contacts[currentObjectIndex].messages.push(newSentMessage)


                // pulizia della chat
                this.messageText = ''

                // creazione di un oggetto che corrisponde ad un messaggio ricevuto
                const newRecievedMessage = {
                    date: this.myDate(),
                    message: '(ง•̀_•́)ง',
                    status: 'received'
                };

                // funzione che incoda il codice da eseguire con un ritardo teorico di 1000 ms
                setTimeout(function(){

                    // inserimento del messaggio ricevuto nell'array messages
                    contacts[currentObjectIndex].messages.push(newRecievedMessage);
    
                },1000)
            };
        },

        // funzione che va a modifiare il parametro visible all'interno di contacts quando ciò che viene scritto nella searchBar della sideBar non è presente al'interno del parametro "name" negli oggetti dell'array contacts
        // rimossa in favore di una computed.
        searchContact(){

            for(i = 0; i < this.contacts.length; i++){

                if(this.contacts[i].name.toLowerCase().includes(this.searchBarText.toLowerCase()) === false){

                    this.contacts[i].visible = false

                }else{

                    this.contacts[i].visible = true

                }
            }
           
        },

        // funzione che elimina un elemento da un Array dati 3 parametri, in questo caso utilizzato per eliminare i messaggi dalla chat
        deleteMessage(array, index, elementsRemoved){

            array.splice(index, elementsRemoved)

        },

        // funzione che recupera la data di oggi e la ritorna in un formato specifico
        myDate(){

            const currentDate = new Date();
            
            let day = currentDate.getDay();
            let month = currentDate.getMonth();
            const year = currentDate.getFullYear()
            let hours = currentDate.getHours()
            let minutes = currentDate.getMinutes()
            let seconds = currentDate.getSeconds()
    
    
            if(day < 10){
                day = '0' + day;
            }
    
            if( month < 10){
                month = '0' + month;
            }
    
            if(hours < 10){
                hours = '0' + hours;
            }
    
            if(minutes < 10){
                minutes = '0' + minutes;
            }
    
            if(seconds < 10){
                seconds = '0' + seconds;
            }
    
    
    
            
            const date = day + '/' + month + '/' + year;
            const time = hours + ":" + minutes + ":" + seconds;
    
            const dateTime = date + ' ' + time
            
            return dateTime
        }, 
        
        // funzione che dato un array, permette di recuperare un elemento specifico posto alla fine di quell'array, in questo caso l'ultimo messaggio
        lastMessage(array){

            let message = ''

            for(i = 0; i < array.length; i++){
                message = array[array.length-1].message
            }

            return message
        },

        // funzione che dato un array, permette di recuperare un elemento specifico posto alla fine di quell'array, in questo caso l'ultima data
        lastDate(array){
            let date = ''

            for(i = 0; i < array.length; i++){
                date = array[array.length-1].date
            }

            return date
        },
    }
}).mount('#app')





/*
    myDate(){

        const currentDate = new Date();
        
        let day = currentDate.getDay();
        let month = currentDate.getMonth();
        const year = currentDate.getFullYear()
        let hours = currentDate.getHours()
        let minutes = currentDate.getMinutes()
        let seconds = currentDate.getSeconds()


        if(day < 10){
            day = '0' + day;
        }

        if( month < 10){
            month = '0' + month;
        }

        if(hours < 10){
            hours = '0' + hours;
        }

        if(minutes < 10){
            minutes = '0' + minutes;
        }

        if(seconds < 10){
            seconds = '0' + seconds;
        }



        
        const date = day + '/' + month + '/' + year;
        const time = hours + ":" + minutes + ":" + seconds;

        this.dateTime = date + ' ' + time
    
    }, 
*/





// Pseudo Codice Milestone 4
/*

    1°  quando scrivo deve accadere qualcosa. → richiamo funzione?
        • @keydown="" ??

    2°  verificare se quello che ho scritto è contenuto all'interno della proprietà nome di contacts

    3°  Se è presente non faccio nulla,

    4°  Se manca cambio la proprietà visible nel suo opposto.

    5°  Utilizzo il metodo con il display:none/active per mostrare le chat che hanno il valore visible true.
*/