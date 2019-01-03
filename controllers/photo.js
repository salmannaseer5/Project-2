const Photo = require("../models/Photo");
const Comment = require("../models/Comment")

module.exports = {
  index: (req, res) => {
    Photo.find({}).then(photos =>
      res.render("index", { photos })
    );
  },
  new: (req, res) => {
    Photo.find({}).then(photos => {
      res.render("new");
    });
  },
  create: (req, res) => {
    Photo.create({
      title: req.body.title,
      url: req.body.url
    }).then(photo => {
      res.redirect("/photo");
    });
  },
  show: (req, res) => {
    Photo.findById({ _id: req.params.id })
    .populate("author")
      .exec(function(err, photo) {
        Comment.populate(photo.comments, { path: "author" }, function(
          err,
          comments
        ) {
          photo.comments = comments;
          res.render("photo/show", photo);
        });
      })
    // .then(showPhoto =>
    //   res.render('show', showPhoto )
    // );
  },

  // edit: (req, res) => {
  //   // rendering the form to update an existing photo
  // },
  
  update: (req, res) => {
    // updating a photo in the database
    let { title, url } = req.body;
    Photo.findByIdAndUpdate({ _id: req.params.id }).then(photo => {
      photo.save( () => {
        res.redirect(`/photo/${photo._id}`);
      });
    });
  },

  destroy: (req, res) => {
    // deleting a photo
    Photo.findByIdAndDelete({_id: req.params.id})
   .then ( () => {
     res.redirect('/');
   })
   .catch(err => {
     console.log(err)
   });

   
  }
};