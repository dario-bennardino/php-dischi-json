const { createApp } = Vue;

createApp({

    data() {
        return {
            title: 'PHP Dischi JSON',
            apiUrl: 'server.php',
            list: [],
            newDisk: {
                title: '',
                author: '',
                year: '',
                poster: '',
                genre: '',
            }
        }
    },
    methods: {
        getApi() {
            axios.get(this.apiUrl)
                .then(result => {
                    this.list = result.data;
                    console.log(this.list);
                })
        },

        addNewDisco() {
            /*
            1. strutturo i dati per inviarli in POST al server.php
            2. invio con axios in post i dati
            3. con i dati che ricevo aggiorno la lista dei dischi
            
            */

            console.log(this.newDisk);
        }
    },
    mounted() {
        this.getApi();
    }


}).mount('#app');