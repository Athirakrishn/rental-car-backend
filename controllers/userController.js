//register controller

exports.registerLogicAPI = (req, res) => {
  console.log("inside register api")
  const { username, email, password } = req.body
  console.log(username, email, password)
  res.status(200).send("register request received")
}

//login controller


//profile pic