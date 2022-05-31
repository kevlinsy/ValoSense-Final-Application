const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });

		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		const userData=user;

		const tokenD= {token, userData};


		res.status(200).send({ data: tokenD, message: "logged in successfully" });


	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};


var a = '100'

router.get("/matchmaking", (req, res) => {


	console.log("here");

	varRank="data";

	var query = User.find().where('dmgPerRound').equals(a)
     var matchGroup = query
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));



});

router.post("/matchmaking", (req, res) => {

	console.log("RANK GROUP is " + req.body.data);
	var rankVar=req.body.data.rankGroup;
	var userEmail=req.body.data.email;

	//var rankVar=req.body.data;
	//rankVar= "\"" + String(req.body.data) + "\""
	console.log(rankVar)
	console.log(userEmail)

	var query = User.find({'rankGroup': `${rankVar}`})
	query.where('email').ne(`${userEmail}`).limit(9).then(users=>res.json(users))
});
/**var query2 = User.find().where('rankGroup').equals(rankVar)
		query2.limit(9)
			.then(users=>res.json(users))
	    .catch(err => res.status(400).json('Error: ' + err));



	});
	/** var query = User.find().where('dmgPerRound').equals(a)
     var matchGroup = query
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));**/
/**
	var query = User.find().where('rankGroup').equals(rankVar)
	query.limit(9)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));





});
*/

module.exports = router;
