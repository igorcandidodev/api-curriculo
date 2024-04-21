const getCurriculoRepository = (sequelize, {DataTypes}) => {
    const Curriculo = sequelize.define("curriculos");

    Curriculo.associate = (models) => {
        Curriculo.hasOne(models.InformacoesPessoais);
        Curriculo.hasMany(models.ExperienciaProfissional);
        Curriculo.hasMany(models.FormacaoAcademica);
        Curriculo.hasMany(models.Idioma);
        Curriculo.hasMany(models.Ferramenta);
    }  

    return Curriculo;
}

export default getCurriculoRepository;