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
        Curriculo.hasOne(models.InformacoesPessoais);
        Curriculo.hasMany(models.ExperienciaProfissional);
        Curriculo.hasMany(models.FormacaoAcademica)
    }  
    
    return Curriculo;
}

export default getCurriculoRepository;