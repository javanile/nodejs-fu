/*!
 * NodeJS Filesystem Utility
 *
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const fs = require('fs')
    , path = require('path')
    , mkdir = require('mkdirp')
    , merge = require('deepmerge')

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
     * Write content into file.
     *
     * @param file
     * @param data
     * @returns {*}
     */
    writeFile: function (file, data) {
        if (typeof data === 'undefined') { data = '' }
        return fs.writeFileSync(file, data)
    },

    /**
     * Append content into file.
     *
     * @param file
     * @param data
     * @returns {*}
     */
    appendFile: function (file, data) {
        if (typeof data === 'undefined') { data = '' }
        return fs.appendFileSync(file, data)
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
     * Check if directory exists.
     *
     * @param file
     * @returns {*}
     */
    isDir: function (dir) {
        return this.isDirectory(dir)
    },

    /**
     * Create directory recursively only if not exists.
     *
     * @param dir
     */
    mkdir: function (dir) {
        if (!fs.existsSync(dir)) {
            return mkdir.sync(dir)
        }
    },

    /**
     * Generic exists file or directory
     *
     * @param file
     */
    exists: function (file) {
        return fs.existsSync(file)
    },

    /**
     * Generic exists file or directory
     *
     * @param file
     */
    copy: function (src, dest) {
        this.mkdir(path.dirname(dest))
        return fs.copyFileSync(src, dest)
    },

    /**
     *
     * @param file
     * @returns {*}
     */
    unlink: function (file) {
        return fs.unlinkSync(file);
    },

    /**
     * Rename file
     *
     * @param oldPath
     * @param newPath
     * @returns {*}
     */
    rename: function (oldPath, newPath) {
        return fs.renameSync(oldPath, newPath);
    },

    /**
     * Rename file
     *
     * @param oldPath
     * @param newPath
     * @returns {*}
     */
    readJsonFile: function (file) {
        try {
            return JSON.parse(fs.readFileSync(file, 'utf8'))
        } catch (ex) {
            return {}
        }
    },

    /**
     * Rename file
     *
     * @param oldPath
     * @param newPath
     * @returns {*}
     */
    writeJsonFile: function (file, data) {
        return this.writeFile(file, JSON.stringify(data, null, 4))
    },

    /**
     * Rename file
     *
     * @param oldPath
     * @param newPath
     * @returns {*}
     */
    mergeJsonFile: function (file) {
        var data = {}
        for (var i in arguments) {
            if (arguments.hasOwnProperty(i) && this.fileExists(arguments[i])) {
                data = Object.assign(data, merge(data, this.readJsonFile(arguments[i])));
            }
        }
        this.writeJsonFile(file, data)
    }
}
