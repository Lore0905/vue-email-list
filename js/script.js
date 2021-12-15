Vue.config.devtools = true;

var app5 = new Vue(
    {
        el: '#root',
        data: {
            email: [],
            visibleEmail: true,
            numberMail: 10,
            
        },
        methods:{
            
            
        },
        created: function(){
            
            for( let i = 0; this.email.length < this.numberMail; i++ ) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((singleEmail) => {
                    this.email.push(singleEmail.data.response)
                    
                    console.log(this.email)
                });
            }
            
            
        }
    }
);