window.onload = function(){
    new Vue({
        el: "#my",
        data: {
            n: 1,
            items: [
                {title: '在线咨询', icon: 'icon-shenghuo', color: '#f60'},
                {title: '个人理财', icon: 'icon-shenghuo', color: '#f60'},
                {title: '', icon: 'icon-shenghuo', color: '#f60'},
                {title: '', icon: 'icon-shenghuo', color: '#f60'},
                {title: '', icon: 'icon-shenghuo', color: '#f60'},
                {title: '', icon: 'icon-shenghuo', color: '#f60'}
            ],
            img: ['img/banner1.jpg', 'img/banner2.jpg', 'img/banner3.jpg', 'img/banner4.jpg', 'img/banner5.jpg', 'img/banner6.jpg']
        },
        methods: {
            play:function(){
                setInterval(this.autoPlay,2000)
            },
            autoPlay:function(){
                this.n++;
                if(this.n == this.img.length){
                    this.n = 0;
                }
            }
        },
        mounted:function(){
            this.play();
        }
    })
}