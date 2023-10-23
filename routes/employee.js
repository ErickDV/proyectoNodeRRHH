const express = require('express');
const employee = express.Router();
const db = require('../config/database');

//Agregar empleado
employee.post("/alta", async (req, res, next) => {
    const {mply_name,mply_lastname, mply_phone, mply_mail,mply_address} = req.body;
    if(mply_name,mply_lastname && mply_phone && mply_mail && mply_address){
        let query = `INSERT INTO employee(employee_name, employee_surnames, employee_phone, employee_email, employee_address) `;
        query += `VALUES('${mply_name}','${mply_lastname}',${mply_phone},'${mply_mail}','${mply_address}')`;
        
        const rows = await db.query(query);
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: 'registro del empleado exitoso'});
        }
        return res.status(500).json({code: 500, message: 'hubo un error al realizar la operacion'});
    }
    return res.status(500).json({code: 500, message: 'campos incompletos'});
});

//Modificar empleado
employee.patch("/modificar", async (req, res, next) => {
    const {mply_id, mply_name,mply_lastname, mply_phone, mply_mail,mply_address} = req.body;
    if(mply_id && mply_name,mply_lastname && mply_phone && mply_mail && mply_address){
        let query = `UPDATE employee SET employee_name = '${mply_name}', employee_surnames = '${mply_lastname}', `;
        query += `employee_phone = ${mply_phone}, employee_email = '${mply_mail}', employee_address = '${mply_address}' `;
        query += ` WHERE employee_id = ${mply_id}`;
        const rows = await db.query(query);
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: 'modificacion de los datos del empleado exitosa'});
        }
        return res.status(500).json({code: 500, message: 'hubo un error al realizar la operacion'});
    }
    return res.status(500).json({code: 500, message: 'campos incompletos'});
});

//Eliminar empleado
employee.delete("/eliminar", async (req, res, next) => {
    const {mply_id} = req.body;
    if(mply_id){
        const rows = await db.query(`DELETE FROM employee WHERE employee_id = ${mply_id}`);
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: 'Se elimino el empleado correctamente'});
        }
        return res.status(500).json({code: 500, message: 'hubo un error al realizar la operacion'});
    }
    return res.status(500).json({code: 500, message: 'campos incompletos'});
});

//Buscar empleado por nombre
employee.get("/buscar", async (req, res, next) => {
    const {mply_name} = req.body;
    if(mply_name){
        const rows = await db.query(`SELECT * FROM employee WHERE employee_name = '${mply_name}'`);
        return res.status(201).json({code: 201, message: rows});
        //return res.status(500).json({code: 500, message: 'no se encuentra al empleado'})
    }
    return res.status(500).json({code: 500, message: 'campos incompletos'});
});

//Buscar por ID
employee.get('/:id([0-9]{1,3})', async (req,res,next) => {
    const id = req.params.id;
    try {
        const mply = await db.query("SELECT * FROM employee WHERE employee_id = ?", [id]);
        if(mply.length == 1){
            return res.status(200).json({code:200,message:mply});
        }
        return res.status(404).json({code:404,message:"Empleado no encontrado."});
    } catch(err) {
        console.error(err);
        return res.status(500).json({code:500, message:"Error interno del servidor."});
    }
});


module.exports = employee