const user = {
    name: 'felipe',
    lastname: 'accyole'
};

function getUserWithLastName(user) {
    return{
        ...user,
        fullname : `${user.name} ${user.lastname}`
    }
};

const userWithFullName = getUserWithLastName(user);

console.log(userWithFullName);