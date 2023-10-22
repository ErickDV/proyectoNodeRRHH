//Modificar empleado
//Eliminar empleado
//Buscar empleado por nombre

const express = require('express');
const mply = express.Router();
const db = require('../config/database');

//Agregar empleado
mply.post("/alta", async (req, res, next) => {
    const {mply_name,mply_lastname, mply_phone, mply_mail,mply_address} = req.body;
    if(mply_name,mply_lastname && mply_phone && mply_mail && mply_address){
        let query = `INSERT INTO hr(employee_name, employee_surnames, employee_phone, employee_email, employee_address) `;
        query += `VALUES('${mply_name}','${mply_lastname}','${mply_phone}','${mply_mail}','${mply_address}')`

        const rows = await db.query(query);
        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: 'registro del empleado exitoso'})
        }
        return res.status(500).json({code: 500, message: 'hubo un error al realizar la operacion'})
    }
    return res.status(500).json({code: 500, message: 'campos incompletos'})
})