const getCurriculoRepository = (sequelize, {DataTypes}) => {
    const Curriculo = sequelize.define("curriculo", {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
        
    });

    Curriculo.associate = (models) => {
        Curriculo.hasOne(models.InformacoesPessoais, {
            foreignKey: {
                allowNull: false,
            }
        });
    }


    return Curriculo;
}

export default getCurriculoRepository;