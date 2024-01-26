import Note from "../models/note.js";

export const getNote = async (req, res) => {
  try {
    const getnotes = await Note.findAll({
      attributes: ["id", "email_user", "text", "is_archived"],
      where: {
        is_archived: false,
      },
      order: [["date", "DESC"]],
    });
    res.json(getnotes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getNotearchived = async (req, res) => {
  try {
    const getnotes = await Note.findAll({
      attributes: ["id", "email_user", "text", "is_archived"],
      where: {
        is_archived: true,
      },
      order: [["date", "DESC"]],
    });
    res.json(getnotes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createNote = async (req, res) => {
  const { text } = req.body;
  console.log(text);
  const newNote = await Note.create({ text });
  console.log(newNote);
  res.send("Note created");
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const noteupdated = await Note.findByPk(id);
    noteupdated.text = text;
    await noteupdated.save();
    res.json(noteupdated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const archiveNote = async (req, res) => {
  try {
    const { id } = req.params;
    const notearchived = await Note.findByPk(id);
    notearchived.is_archived = true;
    await notearchived.save();
    res.json(notearchived);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const unarchiveNote = async (req, res) => {
  try {
    const { id } = req.params;
    const notedearchived = await Note.findByPk(id);
    notedearchived.is_archived = false;
    await notedearchived.save();
    res.json(notedearchived);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.destroy({
      where: {
        id: id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.send("Note deleted");
};
