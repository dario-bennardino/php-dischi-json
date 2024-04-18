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

            // console.log(this.newDisk);
            //php per poter ricevere i dati da una pagina html deve vederli come se provenissero da un form nell'header della chiamata
            const data = new FormData();
            data.append('newDiskTitle', this.newDisk.title);
            data.append('newDiskAuthor', this.newDisk.author);
            data.append('newDiskYear', this.newDisk.year);
            data.append('newDiskPoster', this.newDisk.poster);
            data.append('newDiskGenre', this.newDisk.genre);

            // console.log(data);

            axios.post(this.apiUrl, data)
                .then(result => {
                    console.log(result.data);
                })

            //sto inviando le mia variabili al server
        }
    },
    mounted() {
        this.getApi();
    }


}).mount('#app');