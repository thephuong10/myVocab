const { create, getAll, update, remove } = require("../controllers/vocab");

const routers = require("express").Router();

routers.post("/vocab", create);
routers.put("/vocab", update);
routers.get("/vocab/get/all", getAll);
routers.delete("/vocab/:id", remove);

module.exports = routers;
