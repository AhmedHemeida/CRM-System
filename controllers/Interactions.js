const { Interaction } = require('../models');

exports.getAllInteractions = async (req, res) => {
  try {
    const interactions = await Interaction.findAll();
    res.status(200).json(interactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createInteraction = async (req, res) => {
  try {
    const interaction = await Interaction.create(req.body);
    res.status(201).json(interaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInteractionById = async (req, res) => {
  try {
    const interaction = await Interaction.findByPk(req.params.id);
    if (!interaction) return res.status(404).json({ message: 'Interaction not found' });
    res.status(200).json(interaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateInteraction = async (req, res) => {
  try {
    await Interaction.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Interaction updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteInteraction = async (req, res) => {
  try {
    await Interaction.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Interaction deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};