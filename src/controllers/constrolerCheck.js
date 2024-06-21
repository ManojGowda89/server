

exports.getUsers = async (req, res) => {

    const data = req.welmessage
    console.log(data)
    try {
        console.log("api working")
        console.log("routes working")
      res.status(200).send({message:`welcome to mb64-mernpack `})
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };