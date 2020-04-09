const express = require('express');
const router = express.Router();
const {addRoom, getRoomDetails, updateRoomInfo, deleteRoom} = require('../controllers/hotelInfoController');

router.post('/add-room-details', addRoom);
router.get('/room-details/:_id?', getRoomDetails);
router.put('/room-details/:_id', updateRoomInfo);
router.delete('/room-details/:_id', deleteRoom);

module.exports = router;