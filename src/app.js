const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

module.exports = {
	start: async () => {
		try {
			await app.listen(PORT);
			console.log(
				`Server start at Port: ${PORT} in mode: ${process.env.NODE_ENV}`
			);
		} catch (error) {
			console.log(error.message);
		}
	}
};
