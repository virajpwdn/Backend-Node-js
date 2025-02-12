const connectionRequest = require("../model/connectionrequest.model");
const UserModel = require("../model/user.model");

module.exports.connectionController = async (req, res) => {
  try {
    const fromUserId = req.user._id;
    const toUserId = req.params.userId;
    const status = req.params.status;

    const allowedStatus = ["interested", "ignored"];
    if (!allowedStatus.includes(status))
      throw new Error(`Invalid Status: ${status}`);

    // if(fromUserId == toUserId) throw new Error(`You cannot send request to yourself`);
    // const sameUserCheck = UserModel.

    const validateToUserId = await UserModel.findById(toUserId);
    if(!validateToUserId) throw new Error(`user does not exist ${toUserId}`);

    const existingConnectionRequest = await connectionRequest.findOne({
      $or: [
        { fromUserId:fromUserId, toUserId:toUserId },
        { fromUserId: toUserId, toUserId: fromUserId },
      ],
    });

    if(existingConnectionRequest) throw new Error(`Request is already sent`);


    const data = await connectionRequest.create({
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
