import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../sequelize';

class Cat extends Model {}

Cat.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'cat',
});

export default Cat;
