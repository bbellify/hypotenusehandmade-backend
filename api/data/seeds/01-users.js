
exports.seed = async function(knex) {
    await knex('users').insert([
        { 
            username: 'admin',
            password: '$2a$08$JRFUYW7Txz7XhA5cupUjUOqPuMiGPhIcDNWXxL1QkFCbyCLIYerBK'
        },
        {
            username: 'brian',
            password: '$2a$08$t8wCwz4mihTo4uK9l68HMOH0P3SzC7Q4WMC24oPb.vNTc0ag8Z1I6'
        }
    ])
};