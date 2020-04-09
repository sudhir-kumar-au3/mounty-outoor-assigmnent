const { Hotel } = require("../DBConfig");

//create method to add rooms
const addRoom = (req, res) => {
  const data = req.body;
  Hotel.findOne({
    roomNo: req.body.roomNo,
  })
    .then((room) => {
      if (!room) {
        Hotel.create(data)
          .then((room) => {
            res.json(room);
          })
          .catch((error) => {
            res.status(500).json({ error: error.message });
          });
      } else {
        res.json({
          error: "Please enter a new room no. this is room already exists",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message, message: "something went wrong" });
    });
};

//Get rooms info
const getRoomDetails = (req, res) => {
  if (req.params._id) {
    Hotel.findById({
      _id: req.params._id,
    })
      .then((roomDetail) => {
        res.json(roomDetail);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  } else {
    Hotel.find({})
      .then((rooms) => {
        res.json(rooms);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
};

// update room details of one room
const updateRoomInfo = (req, res) => {
  const roomId = req.params._id;
  if (roomId) {
    Hotel.findByIdAndUpdate(roomId, req.body, { new: true })
      .then((updatedRoom) => {
        res.json({ response: updatedRoom });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  } else {
    res.json({ error: "room by given id does not exist" });
  }
};

//delete room information
const deleteRoom = (req, res) => {
  if (req.params._id) {
    Hotel.findOneAndRemove(req.params._id)
      .then((response) => {
        res.json({
          message: `Room No. ${response.roomNo} deleted successfully`,
        });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  } else {
    res.json({ error: "room does not exist" });
  }
};
module.exports = {
  addRoom,
  getRoomDetails,
  updateRoomInfo,
  deleteRoom,
};
