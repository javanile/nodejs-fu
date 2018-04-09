/*!
 * NodeJS Filesystem Utility
 *
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const fs = require('fs')

module.exports = {

    /**
     * Read file contents into string.
     *
     * @param file
     */
    readFile: function (file) {
        return fs.readFileSync(file).toString()
    },

    /**
     *
     * @param file
     * @param data
     * @returns {*}
     */
    writeFile: function (file, data) {
        return fs.writeFileSync(file, data)
    },

    /**
     * Check if file exists.
     *
     * @param file
     * @returns {*}
     */
    fileExists: function (file) {
        return file && fs.existsSync(file) && fs.lstatSync(file).isFile()
    },

    /**
     *
     * @param file
     * @returns {*}
     */
    unlink: function (file) {
        return fs.unlinkSync(file);
    }
}
