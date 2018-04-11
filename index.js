/*!
 * NodeJS Filesystem Utility
 *
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const fs = require('fs')
    , mkdir = require('mkdirp')

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
     * Check if file exists.
     *
     * @param file
     * @returns {*}
     */
    isDirectory: function (dir) {
        return dir && fs.existsSync(dir) && fs.lstatSync(dir).isDirectory()
    },

    /**
     *
     * @param dir
     */
    mkdir: function (dir) {
        if (!fs.existsSync(dir)) {
            return mkdir.sync(dir)
        }
    },

    /**
     *
     */
    exists: function (file) {
        return fs.existsSync(file)
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
