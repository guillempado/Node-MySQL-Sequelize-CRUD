const db = require('../../db/db.js');

const Employee = db.Employee;
module.exports = {
    insertEmployee,
    updateEmployee,
    getOneEmployee,
    getAllEmployees,
    deleteEmployee

};

async function insertEmployee(name, position, email, wage) {
    await Employee.create({
        name,
        position,
        email,
        wage
    });
}

async function updateEmployee(name, position, email, wage, id) {
    await Employee.update({
        name,
        position,
        email,
        wage
    }, { where: { id: id } });
}

async function getOneEmployee(id) {
    return await Employee.findByPk(id);
}

async function getAllEmployees() {
    return await Employee.findAll();
}

async function deleteEmployee(id) {
    const employee = await getOneEmployee(id);
    await employee.destroy();
}