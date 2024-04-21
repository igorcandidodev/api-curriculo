const getCurriculoRepository = (sequelize, {DataTypes}) => {
    const Curriculo = sequelize.define("curriculos", {
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

    Curriculo.associate = (models) => {
        Curriculo.hasMany(models.ExperienciaProfissional)
    }

    return Curriculo;
}

export default getCurriculoRepository;