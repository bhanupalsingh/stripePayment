const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Blog = mongoose.model('blogs');

module.exports = app => {
    app.get('/api/blogs',requireLogin,async (req,res)=>{
      const blogs = await Blog.find({ _user: req.user.id });

      res.send(blogs);
    });

    app.post('/api/blogs', requireLogin, async (req, res) => {
      const { title, subject, body } = req.body;

      const blog = new Blog({
        title,
        subject,
        body,
        _user: req.user.id,
        dateSent: Date.now()
      });

      try{
        await blog.save();
        const message = {message : 'blog added successfully' , status : 'success'};
        res.send(message);
      }catch(err){
        res.status(422).send(err);
      }
    });
  }
