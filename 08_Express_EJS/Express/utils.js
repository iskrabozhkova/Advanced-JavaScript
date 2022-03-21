const layout = 'layout.ejs';

module.exports = {
    renderWithLayout(res,page, data){
       return  res.render(layout, {page, data});
    }
}