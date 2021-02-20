const vm = Vue.createApp({
  data(){
    return{
      message:'Tache ajoutée',
      todos:['boire'
      ]
    }
  },
  methods:{
    
    AjouterTache(){
      let UneTache = this.tache;
      this.todos.push(UneTache);
      this.tache='';
    },
    SupprimerTache(task){
      //C et a ce niveau j aimerai supprimer l tache avec cette methode
        //let tasks = this.todos;
        let index = this.todos.indexOf(task);
        this.todos.splice(index,1);
      }
     
    }
  
})
vm.component('note',{
  props:['content'],
  template:`<p>{{content}}<p>`
});


vm.mount(id='#app');