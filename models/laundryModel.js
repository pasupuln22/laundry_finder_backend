// models/laundryModel.js

import { db } from "../config/dbConfig.js";
import { execQuery } from "../utils/dbUtil.js";

// Model function to create a new laundry entry
export const createLaundryMdl = function (laundryData, callback) {
    const {
        name,
        address,
        city,
        state,
        zipcode,
        country,
        latitude,
        longitude
    } = laundryData;

    const query = `
        INSERT INTO \`laundry\` (
            \`name\`,
            \`address\`,
            \`city\`,
            \`state\`,
            \`zipcode\`,
            \`country\`,
            \`latitude\`,
            \`longitude\`
        ) VALUES (
            '${name}',
            '${address}',
            '${city}',
            '${state}',
            '${zipcode}',
            '${country}',
            '${latitude}',
            '${longitude}'
        )
    `;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

// Model function to get a laundry entry by ID
export const getLaundryByIdMdl = function (id, callback) {
    const query = `SELECT * FROM laundry WHERE laundry_id = '${id}'`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

// Model function to update a laundry entry
export const updateLaundryMdl = function (id, updatedLaundryData, callback) {
    const {
        name,
        address,
        city,
        state,
        zipcode,
        country,
        latitude,
        longitude
    } = updatedLaundryData;

    const query = `
        UPDATE \`laundry\`
        SET 
            \`name\` = '${name}',
            \`address\` = '${address}',
            \`city\` = '${city}',
            \`state\` = '${state}',
            \`zipcode\` = '${zipcode}',
            \`country\` = '${country}',
            \`latitude\` = '${latitude}',
            \`longitude\` = '${longitude}'
        WHERE 
            \`laundry_id\` = '${id}'
    `;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

// Model function to delete a laundry entry
export const deleteLaundryMdl = function (id, callback) {
    const query = `DELETE FROM \`laundry\` WHERE \`laundry_id\` = '${id}'`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

// Model function to get all laundry entries
export const getAllLaundriesMdl = function (callback) {
    const query = `SELECT * FROM laundry`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};
