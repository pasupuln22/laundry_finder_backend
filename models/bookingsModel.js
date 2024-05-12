import { db } from "../config/dbConfig.js";
import { execQuery } from "../utils/dbUtil.js";

export const createBookingMdl = function (bookingData, callback) {
    const {
        items,
        selected_date,
        selected_time,
        instructions,
        price,
        type,
        created_by
    } = bookingData;

    const query = `
        INSERT INTO \`bookings\` (
            \`items\`,
            \`selected_date\`,
            \`selected_time\`,
            \`instructions\`,
            \`price\`,
            \`type\`,
            \`created_by\`
        ) VALUES (
            '${items}',
            '${selected_date}',
            '${selected_time}',
            '${instructions}',
            '${price}',
            '${type}',
            '${created_by}'
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

export const getBookingByIdMdl = function (id, callback) {
    const query = `SELECT * FROM bookings WHERE id = '${id}'`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

export const getBookingsByUserMdl = function (user, callback) {
    const query = `SELECT * FROM bookings WHERE created_by = '${user}'`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

export const getAllBookingsMdl = function (callback) {
    const query = `SELECT * FROM bookings`;

    if (callback && typeof callback === "function") {
        execQuery(db, query, function (err, results) {
            callback(err, results);
        });
    } else {
        return execQuery(db, query);
    }
};

export const getTotalPricesMdl = function (userId, callback) {
    const sql = `
        SELECT 
            IFNULL(SUM(CASE WHEN WEEK(selected_date) = WEEK(CURDATE()) THEN price ELSE 0 END), 0) AS TotalpriceThisWeek,
            IFNULL(SUM(CASE WHEN YEAR(selected_date) = YEAR(CURDATE()) AND MONTH(selected_date) = MONTH(CURDATE()) THEN price ELSE 0 END), 0) AS TotalpriceThisMonth,
            IFNULL(SUM(CASE WHEN YEAR(selected_date) = YEAR(CURDATE()) THEN price ELSE 0 END), 0) AS TotalpriceThisYear,
            IFNULL(SUM(price), 0) AS Totalprice
        FROM 
            bookings 
        WHERE 
            created_by = '${userId}'
    `;

    execQuery(db, sql, (err, results) => {
        if (err) {
            console.error('Error fetching total prices:', err);
            return callback(err, {});
        }

        // Extract the total prices from the first row of the results
        const totalPrices = {
            TotalpriceThisWeek: results[0].TotalpriceThisWeek,
            TotalpriceThisMonth: results[0].TotalpriceThisMonth,
            TotalpriceThisYear: results[0].TotalpriceThisYear,
            Totalprice: results[0].Totalprice
        };

        callback(null, totalPrices);
    });
};
