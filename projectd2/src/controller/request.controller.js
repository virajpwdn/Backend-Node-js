const connectionRequest = require("../model/connectionrequest.model");
const UserModel = require("../model/user.model");

module.exports.connectionController = async (req, res) => {
  try {
    const fromUserId = req.user._id;
    const toUserId = req.params.userId;
    const status = req.params.status;

    const allowedStatus = ["interested", "ignored"];
    if (!allowedStatus.includes(status))
      throw new Error("Invalid Status: " + status);

    const existingConnectionRequest = await connectionRequest.findOne({
      $or: [
        { fromUserId, toUserId },
        { fromUserId: toUserId, toUserId: fromUserId },
      ],
    });

    const data = await connectRequest.create({
      fromUserId,
      toUserId,
      status,
    });

    res
      .status(200)
      .json({ message: "Connection request sent successfully", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
