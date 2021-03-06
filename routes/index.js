exports.index = (req, res, next) => {
    req.model.Article.find({}).then((articles) => {
        //The articles documents are returned in an array. No need to convert to array!
        res.render('index', { articles: articles });
    }).catch((error) => {
        return next(error);
    });
};