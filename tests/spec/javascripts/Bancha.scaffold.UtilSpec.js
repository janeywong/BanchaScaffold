/*!
 *
 * Bancha Scaffolding Library
 * Copyright 2011-2012 Roland Schuetz
 *
 * Bancha.scaffold.Util Tests
 *
 * @copyright     Copyright 2011-2012 Roland Schuetz
 * @link          http://scaffold.banchaproject.org
 * @author        Roland Schuetz <mail@rolandschuetz.at>
 *
 * For more information go to http://scaffold.banchaproject.org
 */
/*jslint browser: true, vars: true, undef: true, nomen: true, eqeq: false, plusplus: true, bitwise: true, regexp: true, newcap: true, sloppy: true, white: true */
/*jshint bitwise:true, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:true, regexp:true, undef:true, trailing:false */
/*global Ext, Bancha, describe, it, beforeEach, expect, jasmine, Mock, BanchaScaffoldSpecHelper */

describe("Bancha.scaffold.Util tests",function() {
        
    it("should pass all Bancha.scaffold.Util.toFirstUpper tests", function() {
        var util = Bancha.scaffold.Util;
        expect('User').toEqual(util.toFirstUpper('user'));
        expect('UserName').toEqual(util.toFirstUpper('userName'));
    });


    it("should pass all Bancha.scaffold.Util.humanize tests", function() {
        var util = Bancha.scaffold.Util;

        // first upper case
        expect('User').toEqual(util.humanize('user'));

        // ids
        expect('User').toEqual(util.humanize('user_id'));

        // underscores
        expect('User name').toEqual(util.humanize('user_name'));
        expect('Name with many spaces').toEqual(util.humanize('name_with_many_spaces'));

        // camel case
        expect('User name').toEqual(util.humanize('userName'));
        expect('Name with many spaces').toEqual(util.humanize('nameWithManySpaces'));

        // shouldn't change normal text
        expect('John Smith').toEqual(util.humanize('John Smith'));
        expect('This is a normal text with spaces, Upper case words and all UPPER CASE words!'
               ).toEqual(util.humanize('This is a normal text with spaces, Upper case words '+
               'and all UPPER CASE words!'));
    });
    
}); //eo scaffold util functions

//eof
