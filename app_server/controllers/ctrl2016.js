
const winnerlist = function(req, res){
    res.render('2016',{
        winners:
        [
            {name:'Chun-Li', ranking:'1'},
            {name:'Ryu', ranking:'2'},
            {name:'Nash', ranking:'3'},
            {name:'Necalli', ranking:'4'},
            {name:'Ken', ranking:'5'},
        ]});
};
module.exports = {
    winnerlist
};