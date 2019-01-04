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
      res.redirect('/photo/');
    });
  },
  show: (req, res) => {
    Photo.findById({ _id: req.params.id })
    .populate("comment")
      .exec(function(err, photo) {
        Comment.populate(photo.comments, { path: "comment" }, function(
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
    Photo.findOneAndUpdate({ _id: req.params.id }).then(photo => {
      photo.comments.push(
        { content });
      photo.save( () => {
        res.redirect(`/photo/${photo._id}`);
      });
    });
  },


  // update: (req, res) => {
  //   Photo.findOneAndUpdate({ _id: req.params.id})
  //   .then(photo => {
  //     Comment.create({
  //       content: req.body.content
  //     }).then((comment) => {
  //       res.redirect('/photo/${photo._id}')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   })
  // },


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