export const fruitMixin = {
    data(){
        return{
            text: 'Hello there!!!',
            fruits: ['Apple', 'Banana', 'Mango'],
            filterText: ''
        }
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase()
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            })
        }
    },
    created(){
        console.log("created");
    }
}