module.exports = (sequelize, Sequelize) => {
    return sequelize.define('nflTeams', {
        id: {
            type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true
        },
        location: {type: Sequelize.STRING},
        mascot: {type: Sequelize.STRING},
        abbreviation: {type: Sequelize.STRING},
        conference: {type: Sequelize.STRING},
        division: {type: Sequelize.STRING}
    })
}

/*
CREATE TABLE teams (
    id INT AUTO_INCREMENT,
location VARCHAR(255),
    mascot VARCHAR(255),
    abbreviation VARCHAR(255),
    conference ENUM('AFC', 'NFC'),
    division ENUM('North', 'South', 'East', 'West'),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME DEFAULT NOW(),
    PRIMARY KEY(id)
);
*/