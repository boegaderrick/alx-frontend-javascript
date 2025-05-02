var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Object.defineProperty(Subject.prototype, "setTeacher", {
            set: function (teacher) {
                this.teacher = teacher;
            },
            enumerable: false,
            configurable: true
        });
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingC) {
                return 'No available teacher';
            }
            return "Available Teacher: <" + this.teacher.firstName + ">";
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingReact) {
                return 'No available teacher';
            }
            return "Available Teacher: <" + this.teacher.firstName + ">";
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingJava) {
                return 'No available teacher';
            }
            return "Available Teacher: <" + this.teacher.firstName + ">";
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
/// <reference path='subjects/Teacher.ts' />
/// <reference path='subjects/Subject.ts' />
/// <reference path='subjects/Cpp.ts' />
/// <reference path='subjects/React.ts' />
/// <reference path='subjects/Java.ts' />
{
    var cpp = new Subjects.Cpp();
    var java = new Subjects.Java();
    var react = new Subjects.React();
    var cTeacher = {
        firstName: 'Jane',
        lastName: 'Doe',
        experienceTeachingC: 10
    };
    for (var _i = 0, _a = Object.entries({ cpp: cpp, java: java, react: react }); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], val = _b[1];
        val.setTeacher = cTeacher;
        console.log(key === 'cpp' ? 'C++' : "\n" + key.slice(0, 1).toUpperCase() + key.slice(1));
        console.log(val.getRequirements());
        console.log(val.getAvailableTeacher());
    }
}
