const getAll = (req, res, next) => {
  const db = req.app.get("db");
  db.get_houses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send({ errorMessage: "OOOOOPSIES!" }));
};

const create = (req, res, next) => {
  const db = req.app.get("db");
  const { name, address, city, state, zip, img, mortgage, rent } = req.body;
  db.create_house([name, address, city, state, zip, img, mortgage, rent])
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: " OOOOOPSIES!" });
    });
};

const deleteHouse = (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db.delete_house([id])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
};

module.exports = {
  getAll,
  create,
  deleteHouse
};
