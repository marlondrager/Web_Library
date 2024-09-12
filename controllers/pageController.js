const Book = require('../models/Book');

exports.getIndexPage = (req, res) => {
    res.render('index', {
        pageName: 'index',
    });
}

exports.getInfoPage = (req, res) => {
    res.render('info', {
        pageName: 'info',
    });
}

exports.addBook = (req, res) => {
    Book.create(req.body)
        .then(() => {
            console.log('Book is added to library!')
            res.redirect('/info');
        })
        .catch(err => {
            console.log(err)
            res.redirect('/info');
        });
}

exports.getBook = async (req, res) => {

    const book = await Book.findOne({title: req.body.bul})
        .catch(err => {
            console.log(err)
        });

    res.render('info', {
        pageName: 'info',
        book
    });
}