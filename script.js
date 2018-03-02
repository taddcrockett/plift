var app = new Vue({
    el: '#app',
    data: {
        quote_title: '',
        quote: '',
        app_name: 'PLift',
        nav1: 'Home',
        nav2: 'Lifts',
        nav3: 'Specific Lifts',
        nav4: 'Total',
        nav5: 'Reset Data',
        nav6: 'Suggestions',
        welcome: 'Welcome!',
        message1: 'This is Tadd\'s creative project.',
        message2: 'This is the makings of a fitness app. Enjoy an inspirational quote.',
        quote_message: 'Get new quote'
    },
    methods: {
        getQuote: function () {
            console.log("Getting quote")
            var self = this;
            $.ajax({
                url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
                success: function (data) {
                    var post = data.shift();
                    self.quote_title = post.title;
                    self.quote = post.content;
                },
                cache: false
            });
        }
    }
})