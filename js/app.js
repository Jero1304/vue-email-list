/*
Attraverso l’apposita API di Boolean 
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/
const { createApp } = Vue

// console.log(axios)

createApp({
	data() {
		return {
			mails: [],
		}
	},
	methods: {
		getMail() {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
			    .then((res) => {
					console.log(res.data.response)
                    console.log(this.mails.length);
                    this.mails.push(res.data.response)
				})
            },
        },

        mounted() {
            for (let i = 0; i < 10; i++) {
                this.getMail()
		    }
	    },
}).mount('#app')