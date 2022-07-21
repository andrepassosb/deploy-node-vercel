const express = require("express");
const cors = require("cors");

const app = express();

//Config json response
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.json({
      status: 200,
      message: "Serves is up!",
    });
  } catch (error) {
    return res.json({
      status: 500,
      message: error,
    });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
