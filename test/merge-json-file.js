'use strict';

const fu = require('../index')
    , chai = require('chai')

chai.use(require('chai-fs'))
fu.mkdir('temp')

describe('Testing .rename()', function () {

    it('Single file', function () {
        fu.writeJsonFile('temp/file0.json', { file: 'file0', part0: 'yes' })
        fu.mergeJsonFile('temp/file0.json')
    });

    it('Multiple files', function () {
        fu.writeJsonFile('temp/file0.json', { file: 'file0', part0: 'yes' })
        fu.writeJsonFile('temp/file1.json', { file: 'file1', part1: 'yes' })
        fu.writeJsonFile('temp/file2.json', { file: 'file2', part2: 'yes' })
        fu.mergeJsonFile(
            'temp/file.json',
            'temp/file0.json',
            'temp/file1.json',
            'temp/file2.json'
        )
        var data = fu.readJsonFile('temp/file.json')
        chai.assert.deepEqual(data, {
            "file": "file2",
            "part0": "yes",
            "part1": "yes",
            "part2": "yes"
        })
    });

});
