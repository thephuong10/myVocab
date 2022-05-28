const vocab = require("../models/vocab.js");
const vocabModel = require("../models/vocab.js");

const getAll = async (req, res) => {
  try {
    const vocabList = await vocabModel.find({});
    return res.status(200).json(vocabList);
  } catch (error) {
    return res.status(500).json([]);
  }
};

const create = async (req, res) => {
  try {
    const newVocab = req.body;
    console.log(newVocab);
    if (newVocab) {
      const vocabOld = await vocabModel.findOne({
        name: newVocab.name,
      });
      console.log();
      if (!vocabOld) {
        const vocab = await vocabModel(newVocab);
        await vocab.save();
        return res.status(200).json(vocab);
      }
      return res.status(500).json({ message: "Từ vựng này đã tồn tại" });
    }
    return res.status(500).json({ message: "Dữ liệu rỗng" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Thêm không thành công" });
  }
};

const update = async (req, res) => {
  try {
    const newVocab = req.body;
    if (newVocab) {
      const vocabOld = await vocabModel.findOne({
        name: newVocab.name,
        mean: newVocab.mean,
      });
      if (!vocabOld) {
        const vocab = await vocabModel.findOneAndUpdate(
          {
            _id: newVocab["_id"],
          },
          newVocab,
          {
            new: true,
          }
        );
        return res.status(200).json(vocab);
      }
      return res.status(500).json({ message: "Từ vựng này đã tồn tại" });
    }
    return res.status(500).json({ message: "Dữ liệu rỗng" });
  } catch (error) {
    return res.status(500).json({ message: "Cập nhật không thành công" });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      await vocabModel.findOneAndDelete({ _id: id });
      return res.status(200).json({ message: "Xóa thành công" });
    }
    return res.status(200).json({ message: "Dữ liệu rỗng" });
  } catch (error) {
    return res.status(500).json({ message: "Xóa không thành công" });
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
