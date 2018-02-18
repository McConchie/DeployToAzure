
const winnerlist = function(req, res){
    res.render('2017',{
        winners:
            [
                {name:'Guile', ranking:'1'},
                {name:'Rashid', ranking:'2'},
                {name:'Akuma', ranking:'3'},
                {name:'M. Bison', ranking:'4'},
                {name:'Urien', ranking:'5'},
            ]});
};

module.exports = {
    winnerlist
};