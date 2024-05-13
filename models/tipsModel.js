// models/tipsModel.js

import { db } from "../config/dbConfig.js";
import { execQuery } from "../utils/dbUtil.js";

// Model function to create a new tips entry
export const createTipsMdl = function (tipsData, callback) {
    const { title, youtube_url } = tipsData;

    const query = `
        INSERT INTO \`Tips\` (\`title\`, \`youtube_url\`)
        VALUES ('${title}', '${youtube_url}')
    `;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

// Model function to get a tips entry by ID
export const getTipsByIdMdl = function (id, callback) {
    const query = `SELECT * FROM Tips WHERE id = '${id}'`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

// Model function to update a tips entry
export const updateTipsMdl = function (id, updatedTipsData, callback) {
    const { title, youtube_url } = updatedTipsData;

    const query = `
        UPDATE \`Tips\`
        SET 
            \`title\` = '${title}',
            \`youtube_url\` = '${youtube_url}'
        WHERE 
            \`id\` = '${id}'
    `;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

// Model function to delete a tips entry
export const deleteTipsMdl = function (id, callback) {
    const query = `DELETE FROM \`Tips\` WHERE \`id\` = '${id}'`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

// Model function to get all tips entries
export const getAllTipsMdl = function (callback) {
    const query = `SELECT * FROM Tips`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};
