const mongoose = require("mongoose");
const pengguna = mongoose.model("pengguna");

const index = (req, res, next) => {
    pengguna.find({}, { __v: 0 })
      .then((Pgn) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: Pgn
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};


const insert = (req, res, next) => {
    const Pgn = new pengguna({
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
      alamat: req.body.alamat,
      tanggal_daftar: req.body.tanggal_daftar,
    });
  
    Pgn
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = {
    index, insert
}
