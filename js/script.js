Vue.config.devtools = true;

var app5 = new Vue(
    {
        el: '#root',
        data: {
            email: [],
            
        },
        methods:{
               
            
        },
        created: function(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)
                
                console.log(this.email)
            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((singleEmail) => {
                this.email.push(singleEmail.data.response)

            });
            
        }
    }
);