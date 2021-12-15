Vue.config.devtools = true;

var app5 = new Vue(
    {
        el: '#root',
        data: {
            email: [],
            visibleEmail: false,
            numberMail: 10,
            
        },
        methods:{
            visible: function(){
                
            }
            
        },
        created: function(){
            
            for( let i = 0; i < this.numberMail; i++ ) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((singleEmail) => {
                    this.email.push(singleEmail.data.response)
                    
                    
                });
                
            }
            
            console.log(this.email)
        }
    }
);