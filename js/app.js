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
        currentContact(){
            return this.contacts[this.currentObjectIndex]
        },

        currentChat(){
            return this.currentContact.messages
        },
    },


    methods:{

        activeElement(index){

            this.currentObjectIndex = index;

        },


        newMessage(){

            const contacts = this.contacts;
            const currentObjectIndex = this.currentObjectIndex;
            const messageText = this.messageText;


            if(messageText !== ''){


                // creazione di un oggetto che corrisponde ad un messaggio inviato
                const newSentMessage = {
                    date: '10/01/2020 15:50:00',
                    message: this.messageText,
                    status: 'sent'
                };
                // inserimento del messaggio inviato nell'array messages
                contacts[currentObjectIndex].messages.push(newSentMessage)


                // pulizia della chat
                this.messageText = ''

                // funzion che incoda il codice da eseguire con un ritardo teorico di 1000 ms
                setTimeout(function(){

                    // creazione di un oggetto che corrisponde ad un messaggio ricevuto
                    const newRecievedMessage = {
                        date: '10/01/2020 15:50:00',
                        message: 'Ok',
                        status: 'received'
                    };
                    // inserimento del messaggio ricevuto nell'array messages
                    contacts[currentObjectIndex].messages.push(newRecievedMessage);
    
                },1000)

            };
        },


        searchContact(){

            for(i = 0; i < this.contacts.length; i++){

                if(this.contacts[i].name.toLowerCase().includes(this.searchBarText.toLowerCase()) === false){

                    this.contacts[i].visible = false

                }else{

                    this.contacts[i].visible = true

                }
            }
           
        },


        deleteMessage(array, index, elementsRemoved){

            array.splice(index, elementsRemoved)

        },
    }

}).mount('#app')

Vue.config.devtools = true









// Pseudo Codice Milestone 4
/*

    1°  quando scrivo deve accadere qualcosa. → richiamo funzione?
        • @keydown="" ??

    2°  verificare se quello che ho scritto è contenuto all'interno della proprietà nome di contacts

    3°  Se è presente non faccio nulla,

    4°  Se manca cambio la proprietà visible nel suo opposto.

    5°  Utilizzo il metodo con il display:none/active per mostrare le chat che hanno il valore visible true.
*/