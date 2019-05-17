var app = new Vue({
    el: '#app',
    data: {
        inventory: [],
        searchCriteria: '',
        filterLanguage: ''
    },
    computed: {
        filteredInventory: function () {
            return this.inventory.filter((book => {
                return book.title.toLowerCase().match(app.searchCriteria.toLowerCase()) || 
                book.description.toLowerCase().match(app.searchCriteria.toLowerCase()) && book.language.toLowerCase().match(app.filterLanguage.toLowerCase())
                console.log()
            }))
        }
    },
    created() {
        getData();
    }
})


function getData() {
    fetch('https://api.myjson.com/bins/zyv02', {})
        .then(response => {
            return response.json();
        })
        .then(data => {
            app.inventory = data.books
        })
        .catch(err => {
            console.error(err);
        })
}