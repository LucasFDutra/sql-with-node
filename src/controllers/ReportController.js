const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // encontrar todos os usuarios que tem email que terminam com @gmail.com
    // desses usuarios eu quero buscar todos que moram na rua 'rua jesus'
    // desses usuarios eu quero buscar todos que usam react

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com',
        },
      },
      include: [
        { association: 'addresses', where: { street: 'jesus' } },
        {
          association: 'techs',
          // required: false, gera um left join
          where: { name: 'react' },
        },
      ],
    });

    return res.json(users);
  },
};
